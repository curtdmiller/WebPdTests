var patch;
var playState = false;
var $toggle = $('#play-btn');
$.get('patches/test-1.pd', function(patchStr) {
    // patchStr is the entire contents of the patch!
    patch = Pd.loadPatch(patchStr);
    Pd.start();
})
$(document).ready(function() {
    $toggle.on('click', function() {
        if (playState) {
            Pd.send('gain', [0])
            $toggle.html('Play');
            playState = false;
        } else {
            Pd.send('gain', [.8])
            $toggle.html('Stop');
            playState = true;
        }
    })
})
