<script lang="ts">
	import { get } from "./utilities/http";
	import Intro from "./components/Intro.svelte";
	import Notification from "./components/Notification.svelte";
	import Question from "./components/Question.svelte";
	import type { Question as IQuestion } from "./types/Question";
	import ProgressBar from "./components/ProgressBar.svelte";
	import Result from "./components/Result.svelte";

	const enum LandingPageState {
		Intro = 1,
		Questions = 2,
		Result = 3,
	}

	let notification: string = null;
	let pageState: LandingPageState = LandingPageState.Intro;
	let questions: IQuestion[] = [];
	let answers = new Array(questions.length).fill(0);
	let index = 0;
	let progress = 0;
	let personality = "";

	function startTest() {
		pageState = LandingPageState.Questions;

		get(
			"/api/questions",
			(responseText) => {
				questions = JSON.parse(responseText);
				progress = getProgress();
			},
			() => {
				openNotification("Something went wrong");
			}
		);
	}

	function nextQuestion() {
		if (index === questions.length - 1) {
			personality = getPersonalityType();
			pageState = LandingPageState.Result;
			return;
		}

		index++;
		progress = getProgress();
	}

	function openNotification(message: string) {
		notification = message;

		setTimeout(() => (notification = null), 5000);
	}

	function closeNotification() {
		notification = null;
	}

	function getProgress(): number {
		return ((index + 1) / questions.length) * 100;
	}

	function getPersonalityType(): string {
		const totalScore = answers.reduce(
			(total, current) => total + current,
			0
		);

		const answeredQuestions = answers.reduce((count, value) => {
			if (value) count++;
			return count;
		}, 0);

		return totalScore > (answeredQuestions * 10) / 2
			? "Introvert"
			: "Extrovert";
	}
</script>

{#if notification}
	<Notification message={notification} on:close={closeNotification} />
{/if}
<div class="pt-12 max-w-screen-md m-auto">
	{#if pageState === LandingPageState.Intro}
		<Intro on:startTest={startTest} />
	{:else if pageState === LandingPageState.Questions}
		<ProgressBar {progress} />
		<div>
			{#each questions as question, i}
				{#if index >= i}
					<Question {question} id={i} bind:value={answers[i]} />
				{/if}
			{/each}
			<div class="w-full flex my-7">
				<button
					class="inline-block bg-blue-500 hover:bg-blue-400 text-white font-bold font-heading py-2 px-4 rounded-md ml-auto"
					on:click={nextQuestion}
					>{index === questions.length - 1
						? "Show my result"
						: "Next"}</button
				>
			</div>
		</div>
	{:else if pageState === LandingPageState.Result}
		<Result {personality} />
	{/if}
</div>

<style global lang="postcss">
	@tailwind base;
	@tailwind utilities;
</style>
