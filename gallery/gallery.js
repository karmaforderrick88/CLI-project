const $table = $('#product-table')
const $container = $('#product-container') 
const src = [
               'products/watch.jpeg',
               'products/tecno.jpeg',
               'products/speaker.jpeg',
               'products/powerBank.jpeg',
               'products/power.jpeg',
               'products/pods.jpeg',
               'products/mouse.jpeg',
               'products/Keyboard.jpeg',
               'products/iphone.jpeg',
               'products/hp.jpeg',
               'products/dell.jpeg',
               'products/acer.jpeg',
               'products/karaoke.jpeg',
               'products/router.jpeg',
               'products/beats.jpeg',
               'products/Oneplus.jpeg',
               'products/chifench.jpeg',
               'products/blackwatch.jpeg',
               'products/go-pro.jpeg',
               'products/huawei.jpeg',
               'products/cable.jpeg',
               'products/JBL.jpeg',
               'products/meta.jpeg',
               'products/oculus.jpeg',
               'products/samsung-fold.jpeg',
               'products/car-pods.jpeg',
               'products/AI-VR.jpeg'

            ]

function renderImages(){

    src.forEach((url)=>{

        const $imgcard = `
        <div class="image-card">
        <img src="${url}">
        </div>
        `

        $container.append($imgcard)
    })

}
renderImages()
