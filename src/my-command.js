import sketch from 'sketch'

export function onHandlerLostFocus(context){
  if ( context.actionContext.name == 'Flow' ) {
    // This means the Flow tool just became inactive, which only happens
    // when a Flow has been added, or the user pressed Esc while using the tool.
    // Let's see if there's a `flow` attribute in the selected layers
    let selection = sketch.getSelectedDocument().selectedLayers
    selection.forEach(layer => {
      if ( layer.flow ) {
        console.log(`${layer.name} has a flow:`)
        console.log(layer.flow)
        // now do what you need with layer.flow here…
      }
    })
  }
}
