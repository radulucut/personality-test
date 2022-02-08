<script lang="ts">
    import { fade } from "svelte/transition";
    import type { Question } from "../types/Question";

    export let question: Question;
    export let id: number;
    export let value: number;
</script>

<div in:fade>
    <h2 class="text-2xl my-6">{question.text}</h2>
    {#each question.answers as answer, i}
        <p class="flex items-center my-2">
            <input
                class="w-4 shrink-0 h-4 cursor-pointer"
                type="radio"
                id="{id}{i.toString()}"
                name={id.toString()}
                value={answer.value}
                bind:group={value}
            />
            <label class="text-lg ml-2 cursor-pointer" for="{id}{i.toString()}"
                >{answer.text}</label
            >
        </p>
    {/each}
</div>
