<script lang="ts">
    import { fade } from "svelte/transition";
    import { createEventDispatcher } from "svelte";

    export let message: string;

    const dispatch = createEventDispatcher();

    function close() {
        dispatch("close", null);
    }
</script>

<div
    out:fade
    class="absolute flex justify-center items-center h-10 w-full bg-red-500 opacity-80"
>
    {message}
    <span class="mx-3 cursor-pointer" on:click={close}>&#10005;</span>
</div>
