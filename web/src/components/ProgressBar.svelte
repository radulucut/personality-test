<script lang="ts">
    export let progress: number;
</script>

<div class="fixed top-0 left-0 w-full h-3 bg-slate-300">
    <div class="progress-bar h-full bg-green-400" style:width="{progress}%" />
</div>

<style>
    .progress-bar {
        transition: width 0.6s;
    }
</style>
