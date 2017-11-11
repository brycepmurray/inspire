function ImageController() {
    //Your ImageService is a global constructor function what can you do here if you new it up?
    var imageService = new imageService()

    function getImage() {
        imageService.getImage(image => {
            console.log(image)
            document.body.style.backgroundImage = `url(${image.large_url})`
        })
    }
    getImage()
}