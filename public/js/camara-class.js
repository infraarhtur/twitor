class Camara {


    constructor(videoNode) {
        this.videoNode = videoNode;
    }

    encender() {

       if(!navigator.mediaDevices) {
alert('no resiste');
       }
        navigator.mediaDevices.getUserMedia({
           audio:false,
           video:{width: 300, height: 300} 
        }).then( stream => {
            this.videoNode.srcObject = stream;
            this.stream = stream;
        }).catch(err =>{
            console.log('error al acceder a la camara',err); 
        alert(err)
        } );
    }
    apagar() {

    }
}