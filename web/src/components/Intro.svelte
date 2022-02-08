<script lang="ts">
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function startTest() {
        dispatch("startTest", null);
    }
</script>

<h1 class="text-5xl">Are you an introvert or an extrovert?</h1>
<p class="my-5">
    So do you consider yourself more of an introvert or an extrovert? Take this
    test, put together with input from psychoanalyst Sandrine Dury, and find out
</p>
<div class="flex justify-center">
    <button
        class="inline-block bg-blue-500 hover:bg-blue-400 text-white font-bold font-heading py-2 px-4 rounded-md"
        on:click={startTest}>Start test</button
    >
</div>

<style>
</style>
