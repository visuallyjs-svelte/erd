<script>
    import { EdgeTypePickerComponent, InspectorComponent, ColorPickerComponent } from "@visuallyjs/browser-ui-svelte"
    import { Node, Edge } from "@visuallyjs/browser-ui"
    import {
        PROPERTY_FILL,
        PROPERTY_LABEL,
        PROPERTY_OUTLINE
    } from "./constants.ts";

    let current = $state(null)
</script>

<InspectorComponent className="vjs-erd-inspector" bind:current={current}>
    {#if current?.objectType === Node.objectType}
        <label>Label</label>
        <input type="text" vjs-att={PROPERTY_LABEL} vjs-focus="true"/>

        <div class="vjs-inspector-type">Type: {current.type}</div>

        <label>Fill Color</label>
        <ColorPickerComponent propertyName={PROPERTY_FILL}/>

        <label>Outline Color</label>
        <ColorPickerComponent propertyName={PROPERTY_OUTLINE}/>
    {/if}

    {#if current?.objectType === Edge.objectType}
        <label>Markers</label>
        <EdgeTypePickerComponent propertyName="type"/>
    {/if}
</InspectorComponent>
