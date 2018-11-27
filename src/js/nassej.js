$(document).ready(function(){
    let servicsObj = [
        {
            title:'نص لوريم إيبسوم القياسي والمستخدم',
            description:'لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)ويستخدم في صناعات المطابع ودور النشر. كان لوريم ايبسوم ولازال'
        },
        {
            title:'نص لوريم إيبسوم القياسي والمستخدم',
            description:'لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)ويستخدم في صناعات المطابع ودور النشر. كان لوريم ايبسوم ولازال'
        },
        {
            title:'نص لوريم إيبسوم القياسي والمستخدم',
            description:'لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)ويستخدم في صناعات المطابع ودور النشر. كان لوريم ايبسوم ولازال'
        },
        {
            title:'نص لوريم إيبسوم القياسي والمستخدم',
            description:'لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)ويستخدم في صناعات المطابع ودور النشر. كان لوريم ايبسوم ولازال'
        },
        {
            title:'نص لوريم إيبسوم القياسي والمستخدم',
            description:'لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)ويستخدم في صناعات المطابع ودور النشر. كان لوريم ايبسوم ولازال'
        },
        {
            title:'نص لوريم إيبسوم القياسي والمستخدم',
            description:'لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)ويستخدم في صناعات المطابع ودور النشر. كان لوريم ايبسوم ولازال'
        },
        {
            title:'نص لوريم إيبسوم القياسي والمستخدم',
            description:'لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)ويستخدم في صناعات المطابع ودور النشر. كان لوريم ايبسوم ولازال'
        },
        {
            title:'نص لوريم إيبسوم القياسي والمستخدم',
            description:'لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)ويستخدم في صناعات المطابع ودور النشر. كان لوريم ايبسوم ولازال'
        },
        {
            title:'نص لوريم إيبسوم القياسي والمستخدم',
            description:'لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)ويستخدم في صناعات المطابع ودور النشر. كان لوريم ايبسوم ولازال'
        },
        {
            title:'نص لوريم إيبسوم القياسي والمستخدم',
            description:'لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)ويستخدم في صناعات المطابع ودور النشر. كان لوريم ايبسوم ولازال'
        }
    ]
    $(".header--slider").owlCarousel({
        items:1,
        rtl:true,
        lazyLoad:true
    });
    function runServicesCarusel(){
        $(".service-items").owlCarousel({
            items:4,
            rtl:true,
            loop:false,
            margin:20,
            dots:false,
            nav:true,
            lazyLoad:true,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items:1,
                    nav:false,
                    dots:true
                },
                // breakpoint from 480 up
                480 : {
                    items:1,
                    nav:false,
                    dots:true
                },
                // breakpoint from 768 up
                768 : {
                    items:3,
                    nav:false,
                    dots:true
                },
                // breakpoint from 1200 up
                1200 : {
                    items:4
                }
            }
        });
    }
    function callIndvedualServices(){
        servicsObj.map(
           function(item){
            $('#indvedualServices').append(`
            <div class="item">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.description}</p>
                    </div>
                    <div class="card-footer">
                        <ul class="list-inline p-0 m-0">
                            <li class="list-inline-item">
                                <img src="./src/images/icons/n-img_24.png" alt="">
                            </li>
                            <li class="list-inline-item">
                                <img src="./src/images/icons/n-img_26.png" alt="">
                            </li>
                            <li class="list-inline-item float-left">
                                <a href="#/">استفد من الخدمة</a>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
        `)
           }
        )
        
        runServicesCarusel()
    }
    callIndvedualServices();
});