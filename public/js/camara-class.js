class Camara {


    constructor(videoNode) {
        this.videoNode = videoNode;
    }

    encender() {

        if (!navigator.mediaDevices) {
            alert('no resiste');
        }
        navigator.mediaDevices.getUserMedia({
            audio: false,
            video: { width: 300, height: 300 }
        }).then(stream => {
            this.videoNode.srcObject = stream;
            this.stream = stream;
        }).catch(err => {
            console.log('error al acceder a la camara', err);
            alert(err)
        });
    }
    apagar() {
        this.videoNode.pause();
        if (this.stream) {

            this.stream.getTracks()[0].stop();
        }
    }

    tomarFoto() {
        // Crear un elemento canvas para renderizar ahi la foto
        let canvas = document.createElement('canvas');
        // colocR LAS DIMENCIONES IGUAÑ AL ELEMENTO DEL VIDEO

        canvas.setAttribute('width', 300);
        canvas.setAttribute('height', 300);

        //contexto
        let context = canvas.getContext('2d');
        context.drawImage(this.videoNode, 0, 0,canvas.width ,canvas.height);
        this.foto = context.canvas.toDataURL();

        //limpiar

        canvas = null;

        context = null;
        return this.foto;
    }
}