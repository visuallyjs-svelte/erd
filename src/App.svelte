<script>
    import {
        ControlsComponent,
        DiagramProvider, DiagramComponent, DiagramPaletteComponent
    } from "@visuallyjs/browser-ui-svelte"

    import renderOptions from './render-options'
    import ERDInspector from "./Inspector.svelte";
    import {erdShapes} from "./erd-shapes";
    import './erd.css'


    let { url = "/dataset.json", hidePalette = false, hideInspector = false } = $props();


</script>

<div class="vjs-erd">
    <DiagramProvider>
        <div class="vjs-erd-canvas">
            <DiagramComponent options={renderOptions} {url}>
                <ControlsComponent orientation="column"/>
            </DiagramComponent>
            {#if !hideInspector}
                <ERDInspector/>
            {/if}
        </div>
        {#if !hidePalette}
            <div class="vjs-erd-palette">
                <DiagramPaletteComponent preparedShapes={erdShapes} showLabels={true}/>
            </div>
        {/if}
    </DiagramProvider>
</div>

<style>
    :global(html, body) {
        margin:0;
        padding:0;
        width:100vw;
        height:100vh;
    }
</style>
