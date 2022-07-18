// js for open dropdown
$("#services").click(function () {
    $("#services_child").addClass("services_child");
});

// load page
$('.logopage').click(function() {
    location.reload();
});



//   js for close dropdown
$(document).click(function (event) {
    if (!$(event.target).closest('#services').length) {
        $("#services_child").removeClass("services_child");
    }
})
// js for services open
$(document).click(function (event) {
    var ftdata = {
        "loan": [
            {
                "type": "loan",
                "Name": "Bajaj Housing Finance",
                "mobile": "01213456789",
                "address": "Gulmohar Complex, Bachelor Road, opposite Daga Hospital, Radha Nagar, Dhantoli, Wardha, Maharashtra 442001",
                "images": "img/loanbajaj1.png",
            },
            {
                "type": "loan",
                "Name": "LIC Housing Finance Ltd",
                "mobile": "01213456789",
                "address": " Kakani Complex, 1st Floor, Arvi Rd, Gandhi Nagar, Wardha, Maharashtra 442001",
                "images": "img/loan2lic.JPG",
            },
            {
                "type": "loan",
                "Name": "PNB Housing",
                "mobile": "01213456789",
                "address": "Apartment No. 301, 3rd Floor, Plot No. 1 & 2, Gupta House, Ravindra Nath Tagore Marg, Nagpur, Maharashtra 440001",
                "images": "img/loancoma.jpg",
            },
            {
                "type": "loan",
                "Name": "TATA Capital",
                "mobile": "01213456789",
                "address": "1st Floor, Pandurang Building, Dhantoli Square, Bachelor Road, Wardha, Maharashtra 442001",
                "images": "img/loantata.JPG",
            },
            {
                "type": "loan",
                "Name": "ICICI Bank",
                "mobile": "01213456789",
                "address": " Shivaji Chowk, Arvi Road, Gandhi Niwas, Wardha, Maharashtra 442001",
                "images": "img/loanicic.JPG",
            }
        ],
        "Automobile": [
            {
                "type": "Automobile",
                "Name": "Seva Automotive Pvt Ltd",
                "mobile": "01213456789",
                "address": "Nagpur Road, Nalwadi, Wardha - 442001, Gopuri Chowk ",
                "images": "img/autom1.jfif",
            },
            {
                "type": "Automobile",
                "Name": "Eros Motor Hyundai Showroom..",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/autom2.jfif",
            },
            {
                "type": "Automobile",
                "Name": "Arun Ford",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/autom3.jfif",
            },
            {
                "type": "Automobile",
                "Name": "Unnati Motors",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/autom4.jfif",
            },
            {
                "type": "Automobile",
                "Name": "A K Gandhi Cars",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/autom5.jfif",
            }
        ],
        "Foodservice": [
            {
                "type": "Foodservice",
                "Name": "Shree Caterers And Event Ma..",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/food1.jfif",
            },
            {
                "type": "Foodservice",
                "Name": "One Stop Solution",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/food2.jfif",
            },
            {
                "type": "Foodservice",
                "Name": "Neha Events and Decoration",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/food3.jfif",
            },
            {
                "type": "Foodservice",
                "Name": "Shubham Caterers",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/food4.jfif",
            },
            {
                "type": "Foodservice",
                "Name": "Abhinandan Events Pvt. Ltd.",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/food5.jfif",
            }
        ],
        "HospitalDoctor": [
            {
                "type": "HospitalDoctor",
                "Name": "Varma Test Tube Baby and IV..",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/hosp1.jfif",
            },
            {
                "type": "HospitalDoctor",
                "Name": "Dr. Ankush Nawale Spine Spe..",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/hosp2.jfif",
            },
            {
                "type": "HospitalDoctor",
                "Name": "Theneerajwellness.com",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/hosp3.jfif",
            },
            {
                "type": "HospitalDoctor",
                "Name": "Kasturba Hospital",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/hosp4.jfif",
            },
            {
                "type": "HospitalDoctor",
                "Name": "District General Hospital",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/hosp5.jfif",
            }
        ],
        "Education": [
            {
                "type": "Education",
                "Name": "Jawahar Navodaya Vidyalaya ",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/educ1.jfif",
            },
            {
                "type": "Education",
                "Name": "Navrachna Pratishthan ",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/educ2.jfif",
            },
            {
                "type": "Education",
                "Name": "Navrachna Pratishthan ",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/educ3.jfif",
            },
            {
                "type": "Education",
                "Name": "Defence Career Institute ",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/educ4.jfif",
            },
            {
                "type": "Education",
                "Name": "Defence Career Academy ",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/educ5.jfif",
            }
        ],
        "EventOrganizer": [
            {
                "type": "EventOrganizer",
                "Name": "BOOK YOUR FIRST EVENT ",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/event1.jfif",
            },
            {
                "type": "EventOrganizer",
                "Name": "Neha Events and Decoration ",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/event2.jfif",
            },
            {
                "type": "EventOrganizer",
                "Name": "One Stop Solution ",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/event3.jpg",
            },
            {
                "type": "EventOrganizer",
                "Name": "Mac Honey Events ",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/event4.jfif",
            },
            {
                "type": "EventOrganizer",
                "Name": "Fusion Beat Event ",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/event5.jfif",
            }
        ],
        "Courierservice": [
            {
                "type": "Courierservice",
                "Name": "Blue Dart Express Ltd",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/Courier1.jfif",
            },
            {
                "type": "CourierserviceCourierservice",
                "Name": "DTDC Express Ltd ",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/Courier2.jfif",
            },
            {
                "type": "Courierservice",
                "Name": "DTDC Express Ltd",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/Courier3.jfif",
            },
            {
                "type": "Courierservice",
                "Name": "Disha Airways Enterprises ",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/Courier4.jfif",
            },
            {
                "type": "Courierservice",
                "Name": "Tej Couriers",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/Courier5.jfif",
            }
        ],
        "Fitness": [
            {
                "type": "Fitness",
                "Name": "Worlds Gym ",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/fitness1.jfif",
            },
            {
                "type": "Fitness",
                "Name": "Ap Fitness ",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/fitness2.jfif",
            },
            {
                "type": "Fitness",
                "Name": "Urban Fitness ",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/fitness3.jfif",
            },
            {
                "type": "Fitness",
                "Name": "360 Degree Fitness Studio ",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/fitness4.jfif",
            },
            {
                "type": "Fitness",
                "Name": "Thyrocare Aarogyam Centre ",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/fitness5.jfif",
            }
        ],
        "Jewelry": [
            {
                "type": "Jewelry",
                "Name": "Kanak Jewellers",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/Jewelry1.jfif",
            },
            {
                "type": "Jewelry",
                "Name": "Sumit Jewellers ",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/Jewelry2.jfif",
            },
            {
                "type": "Jewelry",
                "Name": "MTD Jewellers",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/Jewelry3.jfif",
            },
            {
                "type": "Jewelry",
                "Name": "Kathane Jewellers",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/Jewelry4.jfif",
            },
            {
                "type": "Jewelry",
                "Name": "Kathane Sons Jewellers ",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/Jewelry5.jfif",
            }
        ],
        "Medical": [
            {
                "type": "Medical",
                "Name": "Anandam Medical ",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/Medical1.jfif",
            },
            {
                "type": "Medical",
                "Name": "Rukmini Medical Store ",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/Medical2.jfif",
            },
            {
                "type": "Medical",
                "Name": "Shri Gurudeo Medicals ",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/Medical3.jfif",
            },
            {
                "type": "Medical",
                "Name": "Janki Medicals ",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/Medical4.jfif",
            },
            {
                "type": "Medical",
                "Name": "Laxmi Generic Medical Store",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/Medical5.jfif",
            }
        ],
        "Bookstore": [
            {
                "type": "Bookstore",
                "Name": "Gandhi book depo ",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/book1.jfif",
            },
            {
                "type": "Bookstore",
                "Name": "Kelkar book depo ",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/book2.jfif",
            },
            {
                "type": "Bookstore",
                "Name": "Kales book depo ",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/book3.jfif",
            },
            {
                "type": "Bookstore",
                "Name": "Mahindra book depo ",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/book4.jfif",
            },
            {
                "type": "Bookstore",
                "Name": "Bhudada book depo",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/book5.jfif",
            }
        ],
        "Movietalkies": [
            {
                "type": "Movietalkies",
                "Name": "Durga talkies",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/talkies1.jfif",
            },
            {
                "type": "Movietalkies",
                "Name": "Rajtalkies",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/talkies2.jfif",
            },
            {
                "type": "Movietalkies",
                "Name": "Ganesh talkes",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/talkies3.jfif",
            },
            {
                "type": "Movietalkies",
                "Name": "Aarti talkies",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/talkies4.jfif",
            },
            {
                "type": "Movietalkies",
                "Name": "Multiflex",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/talkies5.jfif",
            }
        ],
        "MobileShop": [
            {
                "type": "MobileShop",
                "Name": "Mayur Mobile shop ",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/mobile1.webp",
            },
            {
                "type": "MobileShop",
                "Name": "Samsung Mobile shop ",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/mobile2.jfif",
            },
            {
                "type": "MobileShop",
                "Name": "Vivo Mobile shop ",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/mobile3.jfif",
            },
            {
                "type": "MobileShop",
                "Name": "Realme Mobile shop ",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/mobile4.jpg",
            },
            {
                "type": "MobileShop",
                "Name": "Mi Mobile shop ",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/mobile5.jpg",
            }
        ],
        "OnDemandService": [
            {
                "type": "loaOnDemandServicen",
                "Name": "Dmart",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/onDemand1.png",
            },
            {
                "type": "OnDemandService",
                "Name": "welding shop",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/onDemand2.png",
            },
            {
                "type": "OnDemandService",
                "Name": "cycle shop ",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/onDemand3.jfif",
            },
            {
                "type": "OnDemandService",
                "Name": "kirana bhandar ",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/donDemand4.jfif",
            },
            {
                "type": "OnDemandService",
                "Name": "Electric shop ",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/onDemand5.jfif",
            }
        ],
        "Carcabrental": [
            {
                "type": "Carcabrental",
                "Name": "Sachin Cab Service (Taxi) ",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/carcab1.jfif",
            },
            {
                "type": "Carcabrental",
                "Name": "Sairam Cool Cab Services ",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/carcab2.jfif",
            },
            {
                "type": "Carcabrental",
                "Name": "BOOK-A-CAB Car Rental Services",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/carcab3.jfif",
            },
            {
                "type": "Carcabrental",
                "Name": "Jai Gurudev Cab Services",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/carcab4.jfif",
            },
            {
                "type": "Carcabrental",
                "Name": "Saransh Cab Service ",
                "mobile": "01213456789",
                "address": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, velit!",
                "images": "img/carcab5.jfif",
            }
        ],    
    };



    // if loan
    if ($(event.target).closest('.loanUl').length || $(event.target).closest('#page1Loan').length) {
        $("#Page1").addClass("hiddenpage1");
        $("#page2").html("");
        $.each(ftdata.loan, function (index, object) {
            $("#page2").append(`<div class="portion"><div class="imgbox"><img src="` + object.images + `" alt=""></div><div class="infobox"><div class="prName">` + object.Name + `</div><div class="prRating"><span class="prrat1">4.5</span><span class="prrat2">Rating</span></div><div class="prCalling"><i class="fa fa-phone" aria-hidden="true"></i><span>` + object.mobile + `</span></div><div class="prAddress "><i class="fa fa-location-arrow" aria-hidden="true"></i><span>` + object.address + `</span></div></div><div class="prConnect"><button onclick="popupmodel()">Connect Now</button></div></div>`);
        });
    }
    // if AUTOMOBILE
    else if ($(event.target).closest('.AUTOMOBILEUl').length) {
        $("#Page1").addClass("hiddenpage1");
        $("#page2").html("");
        $.each(ftdata.Automobile, function (index, object) {
            $("#page2").append(`<div class="portion"><div class="imgbox"><img src="` + object.images + `" alt=""></div><div class="infobox"><div class="prName">` + object.Name + `</div><div class="prRating"><span class="prrat1">4.5</span><span class="prrat2">Rating</span></div><div class="prCalling"><i class="fa fa-phone" aria-hidden="true"></i><span>` + object.mobile + `</span></div><div class="prAddress "><i class="fa fa-location-arrow" aria-hidden="true"></i><span>` + object.address + `</span></div></div><div class="prConnect"><button onclick="popupmodel()">Connect Now</button></div></div>`);
        });
    }
    // if Foodservice
    else if ($(event.target).closest('.FDServUl').length || $(event.target).closest('#page1Rest').length) {
        $("#Page1").addClass("hiddenpage1");
        $("#page2").html("");
        $.each(ftdata.Foodservice, function (index, object) {
            $("#page2").append(`<div class="portion"><div class="imgbox"><img src="` + object.images + `" alt=""></div><div class="infobox"><div class="prName">` + object.Name + `</div><div class="prRating"><span class="prrat1">4.5</span><span class="prrat2">Rating</span></div><div class="prCalling"><i class="fa fa-phone" aria-hidden="true"></i><span>` + object.mobile + `</span></div><div class="prAddress "><i class="fa fa-location-arrow" aria-hidden="true"></i><span>` + object.address + `</span></div></div><div class="prConnect"><button onclick="popupmodel()">Connect Now</button></div></div>`);
        });
    }
    // if Hospital & Doctor
    else if ($(event.target).closest('.HosDUl').length || $(event.target).closest('#page1Hosp').length) {
        $("#Page1").addClass("hiddenpage1");
        $("#page2").html("");
        $.each(ftdata.HospitalDoctor, function (index, object) {
            $("#page2").append(`<div class="portion"><div class="imgbox"><img src="` + object.images + `" alt=""></div><div class="infobox"><div class="prName">` + object.Name + `</div><div class="prRating"><span class="prrat1">4.5</span><span class="prrat2">Rating</span></div><div class="prCalling"><i class="fa fa-phone" aria-hidden="true"></i><span>` + object.mobile + `</span></div><div class="prAddress "><i class="fa fa-location-arrow" aria-hidden="true"></i><span>` + object.address + `</span></div></div><div class="prConnect"><button onclick="popupmodel()">Connect Now</button></div></div>`);
        });
    }
    // if Education
    else if ($(event.target).closest('.EducationUl').length || $(event.target).closest('#page1Education').length) {
        $("#Page1").addClass("hiddenpage1");
        $("#page2").html("");
        $.each(ftdata.Education, function (index, object) {
            $("#page2").append(`<div class="portion"><div class="imgbox"><img src="` + object.images + `" alt=""></div><div class="infobox"><div class="prName">` + object.Name + `</div><div class="prRating"><span class="prrat1">4.5</span><span class="prrat2">Rating</span></div><div class="prCalling"><i class="fa fa-phone" aria-hidden="true"></i><span>` + object.mobile + `</span></div><div class="prAddress "><i class="fa fa-location-arrow" aria-hidden="true"></i><span>` + object.address + `</span></div></div><div class="prConnect"><button onclick="popupmodel()">Connect Now</button></div></div>`);
        });
    }
    // if Event Organizer
    else if ($(event.target).closest('.EvtUl').length) {
        $("#Page1").addClass("hiddenpage1");
        $("#page2").html("");
        $.each(ftdata.EventOrganizer, function (index, object) {
            $("#page2").append(`<div class="portion"><div class="imgbox"><img src="` + object.images + `" alt=""></div><div class="infobox"><div class="prName">` + object.Name + `</div><div class="prRating"><span class="prrat1">4.5</span><span class="prrat2">Rating</span></div><div class="prCalling"><i class="fa fa-phone" aria-hidden="true"></i><span>` + object.mobile + `</span></div><div class="prAddress "><i class="fa fa-location-arrow" aria-hidden="true"></i><span>` + object.address + `</span></div></div><div class="prConnect"><button onclick="popupmodel()">Connect Now</button></div></div>`);
        });
    }
    // if Courier service
    else if ($(event.target).closest('.curSerUl').length || $(event.target).closest('#page1Courser').length) {
        $("#Page1").addClass("hiddenpage1");
        $("#page2").html("");
        $.each(ftdata.Courierservice, function (index, object) {
            $("#page2").append(`<div class="portion"><div class="imgbox"><img src="` + object.images + `" alt=""></div><div class="infobox"><div class="prName">` + object.Name + `</div><div class="prRating"><span class="prrat1">4.5</span><span class="prrat2">Rating</span></div><div class="prCalling"><i class="fa fa-phone" aria-hidden="true"></i><span>` + object.mobile + `</span></div><div class="prAddress "><i class="fa fa-location-arrow" aria-hidden="true"></i><span>` + object.address + `</span></div></div><div class="prConnect"><button onclick="popupmodel()">Connect Now</button></div></div>`);
        });
    }
    // if Fitness
    else if ($(event.target).closest('.FitnessUl').length || $(event.target).closest('#page1Fitness').length) {
        $("#Page1").addClass("hiddenpage1");
        $("#page2").html("");
        $.each(ftdata.Fitness, function (index, object) {
            $("#page2").append(`<div class="portion"><div class="imgbox"><img src="` + object.images + `" alt=""></div><div class="infobox"><div class="prName">` + object.Name + `</div><div class="prRating"><span class="prrat1">4.5</span><span class="prrat2">Rating</span></div><div class="prCalling"><i class="fa fa-phone" aria-hidden="true"></i><span>` + object.mobile + `</span></div><div class="prAddress "><i class="fa fa-location-arrow" aria-hidden="true"></i><span>` + object.address + `</span></div></div><div class="prConnect"><button onclick="popupmodel()">Connect Now</button></div></div>`);
        });
    }
    // if Jewelry
    else if ($(event.target).closest('.JewelryUl').length || $(event.target).closest('#page1Jewelry').length) {
        $("#Page1").addClass("hiddenpage1");
        $("#page2").html("");
        $.each(ftdata.Jewelry, function (index, object) {
            $("#page2").append(`<div class="portion"><div class="imgbox"><img src="` + object.images + `" alt=""></div><div class="infobox"><div class="prName">` + object.Name + `</div><div class="prRating"><span class="prrat1">4.5</span><span class="prrat2">Rating</span></div><div class="prCalling"><i class="fa fa-phone" aria-hidden="true"></i><span>` + object.mobile + `</span></div><div class="prAddress "><i class="fa fa-location-arrow" aria-hidden="true"></i><span>` + object.address + `</span></div></div><div class="prConnect"><button onclick="popupmodel()">Connect Now</button></div></div>`);
        });
    }
    // if Medical
    else if ($(event.target).closest('.MedicalUl').length) {
        $("#Page1").addClass("hiddenpage1");
        $("#page2").html("");
        $.each(ftdata.Medical, function (index, object) {
            $("#page2").append(`<div class="portion"><div class="imgbox"><img src="` + object.images + `" alt=""></div><div class="infobox"><div class="prName">` + object.Name + `</div><div class="prRating"><span class="prrat1">4.5</span><span class="prrat2">Rating</span></div><div class="prCalling"><i class="fa fa-phone" aria-hidden="true"></i><span>` + object.mobile + `</span></div><div class="prAddress "><i class="fa fa-location-arrow" aria-hidden="true"></i><span>` + object.address + `</span></div></div><div class="prConnect"><button onclick="popupmodel()">Connect Now</button></div></div>`);
        });
    }
    // if Book store
    else if ($(event.target).closest('.BookUl').length) {
        $("#Page1").addClass("hiddenpage1");
        $("#page2").html("");
        $.each(ftdata.Bookstore, function (index, object) {
            $("#page2").append(`<div class="portion"><div class="imgbox"><img src="` + object.images + `" alt=""></div><div class="infobox"><div class="prName">` + object.Name + `</div><div class="prRating"><span class="prrat1">4.5</span><span class="prrat2">Rating</span></div><div class="prCalling"><i class="fa fa-phone" aria-hidden="true"></i><span>` + object.mobile + `</span></div><div class="prAddress "><i class="fa fa-location-arrow" aria-hidden="true"></i><span>` + object.address + `</span></div></div><div class="prConnect"><button onclick="popupmodel()">Connect Now</button></div></div>`);
        });
    }
    // if Movie talkies
    else if ($(event.target).closest('.MovieUl').length) {
        $("#Page1").addClass("hiddenpage1");
        $("#page2").html("");
        $.each(ftdata.Movietalkies, function (index, object) {
            $("#page2").append(`<div class="portion"><div class="imgbox"><img src="` + object.images + `" alt=""></div><div class="infobox"><div class="prName">` + object.Name + `</div><div class="prRating"><span class="prrat1">4.5</span><span class="prrat2">Rating</span></div><div class="prCalling"><i class="fa fa-phone" aria-hidden="true"></i><span>` + object.mobile + `</span></div><div class="prAddress "><i class="fa fa-location-arrow" aria-hidden="true"></i><span>` + object.address + `</span></div></div><div class="prConnect"><button onclick="popupmodel()">Connect Now</button></div></div>`);
        });
    }
    // if Mobile Shop
    else if ($(event.target).closest('.MobilesUl').length) {
        $("#Page1").addClass("hiddenpage1");
        $("#page2").html("");
        $.each(ftdata.MobileShop, function (index, object) {
            $("#page2").append(`<div class="portion"><div class="imgbox"><img src="` + object.images + `" alt=""></div><div class="infobox"><div class="prName">` + object.Name + `</div><div class="prRating"><span class="prrat1">4.5</span><span class="prrat2">Rating</span></div><div class="prCalling"><i class="fa fa-phone" aria-hidden="true"></i><span>` + object.mobile + `</span></div><div class="prAddress "><i class="fa fa-location-arrow" aria-hidden="true"></i><span>` + object.address + `</span></div></div><div class="prConnect"><button onclick="popupmodel()">Connect Now</button></div></div>`);
        });
    }
    // if On Demand Service
    else if ($(event.target).closest('.demantUl').length || $(event.target).closest('#page1OnDeman').length) {
        $("#Page1").addClass("hiddenpage1");
        $("#page2").html("");
        $.each(ftdata.OnDemandService, function (index, object) {
            $("#page2").append(`<div class="portion"><div class="imgbox"><img src="` + object.images + `" alt=""></div><div class="infobox"><div class="prName">` + object.Name + `</div><div class="prRating"><span class="prrat1">4.5</span><span class="prrat2">Rating</span></div><div class="prCalling"><i class="fa fa-phone" aria-hidden="true"></i><span>` + object.mobile + `</span></div><div class="prAddress "><i class="fa fa-location-arrow" aria-hidden="true"></i><span>` + object.address + `</span></div></div><div class="prConnect"><button onclick="popupmodel()">Connect Now</button></div></div>`);
        });
    }
    // if Carcabrental
    else if ($(event.target).closest('.carcabUl').length) {
        $("#Page1").addClass("hiddenpage1");
        $("#page2").html("");
        $.each(ftdata.Carcabrental, function (index, object) {
            $("#page2").append(`<div class="portion"><div class="imgbox"><img src="` + object.images + `" alt=""></div><div class="infobox"><div class="prName">` + object.Name + `</div><div class="prRating"><span class="prrat1">4.5</span><span class="prrat2">Rating</span></div><div class="prCalling"><i class="fa fa-phone" aria-hidden="true"></i><span>` + object.mobile + `</span></div><div class="prAddress "><i class="fa fa-location-arrow" aria-hidden="true"></i><span>` + object.address + `</span></div></div><div class="prConnect"><button onclick="popupmodel()">Connect Now</button></div></div>`);
        });
    }
    // if AUTOMOBILE
    else if ($(event.target).closest('.AUTOMOBILEUl').length) {
        $("#Page1").addClass("hiddenpage1");
        $("#page2").html("");
        $.each(ftdata.Automobile, function (index, object) {
            $("#page2").append(`<div class="portion"><div class="imgbox"><img src="` + object.images + `" alt=""></div><div class="infobox"><div class="prName">` + object.Name + `</div><div class="prRating"><span class="prrat1">4.5</span><span class="prrat2">Rating</span></div><div class="prCalling"><i class="fa fa-phone" aria-hidden="true"></i><span>` + object.mobile + `</span></div><div class="prAddress "><i class="fa fa-location-arrow" aria-hidden="true"></i><span>` + object.address + `</span></div></div><div class="prConnect"><button onclick="popupmodel()">Connect Now</button></div></div>`);
        });
    }


});


// js for testing
$(document).on("click", function (event) {
    var clsname = event.target.className;
    // alert(clsname)
})



/// smooth 
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  // js for about us page
  $(document).click(function (event) {
    if ($(event.target).closest('#aboutMain').length || $(event.target).closest('.abtpage').length) {
        $("#aboutMain").removeClass("hiddenpage1");
    }
})

// js for popup 
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");

$(".close").click(function () {
    $(".frame").addClass("frameClose");
});


function popupmodel() {
    $(".frame").removeClass("frameClose");
  }
  
function sendContact(){
    $(".form-item input").val("");
    $(".form-item textarea").val("");
    $(".frame").removeClass("frameClose");
}

// slider js 
$(document).ready(function () {
    var currentIndex = 0,
    navItems = $('.sliderDott li');
    
    function setSlide(index) {
      navItems.removeClass('selected');
      navItems.eq(index).addClass('selected');
      $('.slide').css('display', 'none');
      $('.slide').eq(index).css('display', 'block');
    }
  
    $('.sliderDott li').click(function () {
      var index = $('.sliderDott li').index($(this));
      currentIndex = index;
      setSlide(currentIndex);
    });
  
    function next() {
      if (currentIndex < navItems.length - 1) {
        currentIndex++;
        setSlide(currentIndex);
      }
    }
  
    $('.next').click(function () {
      next();
    });
  
    function prev() {
      if (currentIndex > 0) {
        currentIndex--;
        setSlide(currentIndex);
      }
    }
  
    $('.prev').click(function () {
      prev();
    });
  

    function slide() {
      if (currentIndex < navItems.length - 1) {
        currentIndex++;
        setSlide(currentIndex);
      } else {
        currentIndex = 0;
        setSlide(currentIndex);
      }
    }
  
    var interval = setInterval(slide, 1000);
  
  });