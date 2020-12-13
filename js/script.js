$(".ask").on("click", function (param) {
    param.preventDefault();
    $(this).toggleClass("active").next().stop().slideToggle(500);
    $(".answer").not($(this).next()).slideUp(500);
    $(".ask").not(this).removeClass("active");
})

$("button[data-filter]").click(function () {
    $("div[data-filter]").stop().slideUp(500);
    let color = $(this).attr("data-filter");
    $(`div[data-filter=${color}]`).stop().slideDown(500);
    if (color == "all") {
        $("div[data-filter]").stop().slideDown(500);
    }
    $(this).addClass("active");
    $("button[data-filter]").not(this).removeClass("active");
})


function typing(element) {
    if (typeof element == "string") {
        let inner = $(element).html();
        let fullText = "";
        let counter = 0;
        let interval = setInterval(() => {
            fullText += inner[counter];
            $(element).html(fullText);
            counter++;
            if (fullText == inner) {
                clearInterval(interval)
                setTimeout(() => {
                    typing(element)
                }, 1000);
            }
        }, 120);
    }
}

typing("h1")

$(".js-modal-show").click(function (event) {
    event.preventDefault();
    $(".modal").fadeIn(500)
})

$(".close").click(function (e) {
    e.preventDefault();
    $(".modal").fadeOut(500)
})

$(".modal").click(function (e) {
    e.preventDefault();
    console.log(e);
    if (e.target == this) {
        $(".modal").fadeOut(500)
    }
})

$(".nav").css({
    position: "fixed",
    width: "100%",
    top: $(window).height()-$(".nav").outerHeight(),
    "z-index": 999
})

$(window).on("scroll", function () {
    let editPosition = $(window).height()-$(".nav").outerHeight() - $(window).scrollTop();
    if (editPosition > 0) {
        $(".nav").css("top", editPosition)
    } else {
        $(".nav").css("top", 0)
    }
})

/* Задание 1
При нажатии на ссылку “Read More” у текста с классом “text-hidden” должен удалиться класс “hidden”, чтобы отобразился текст. А у ссылки должен поменяться текст на “Hidden”. При повторном нажатии на эту же ссылку текст должен опять скрыться и у ссылки должен вернуться текст по умолчанию. */

$(".read-more").on("click", function () {
    $("span").toggleClass("hidden")
    if ($("span").hasClass("hidden")) {
        $(this).text("Read More")
    } else {
        $(this).text("Hidden")
    }
})


/*Задание 2
Вашим домашним заданием будет сделать появление кнопки вверх с классом “js-btn-top”, если проскролили на 100px и чтобы при нажатии на нее пользователя плавно поднимало наверх. */
$(window).on("scroll", function () {
    if ($(window).scrollTop() > 100) {
        $(".js-btn-top").css({
            bottom: "5%",
        })
    } else {
        $(".js-btn-top").css({
            bottom: "-100%",
        })
    }
})

$(".js-btn-top").click(function () {
    $("html, body").animate({scrollTop: 0}, 500);
    
})