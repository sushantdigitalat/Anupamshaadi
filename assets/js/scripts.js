function active_course() {
    if ($(".active_course").length) {
      $(".active_course").owlCarousel({
        loop: true,
        margin: 20,
        items: 3,
        nav: true,
        autoplay: 5000,
        smartSpeed: 3000,
        dots: true,
        responsiveClass: true,
        thumbs: true,
        thumbsPrerendered: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
          0: {
            items: 1,
            margin: 0
          },
          991: {
            items: 2,
            margin: 30
          },
          1200: {
            items: 3,
            margin: 30
          }
        }
      });
    }
  }
  active_course(); 


  $(window).scroll(function(){
    var sticky = $('header'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 600) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });

  $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      loop: true,
      center: true,
      nav: true,
      dots: true,
      items: 3,
      navText: ['<span></span>', '<span></span>'],
      autoplay: false,
    })
  });


  // Document is ready 
$(document).ready(function () { 
  
  // Validate Username 
  $("#usercheck").hide(); 
  let usernameError = true; 
  $("#usernames").keyup(function () { 
      validateUsername(); 
  }); 

  function validateUsername() { 
      let usernameValue = $("#usernames").val(); 
      if (usernameValue.length == "") { 
          $("#usercheck").show(); 
          usernameError = false; 
          return false; 
      } else if (usernameValue.length < 3 || usernameValue.length > 10) { 
          $("#usercheck").show(); 
          $("#usercheck").html("**length of username must be between 3 and 10"); 
          usernameError = false; 
          return false; 
      } else { 
          $("#usercheck").hide(); 
      } 
  } 

  // Validate Email 
  const email = document.getElementById("email"); 
  email.addEventListener("blur", () => { 
      let regex =  
      /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/; 
      let s = email.value; 
      if (regex.test(s)) { 
          email.classList.remove("is-invalid"); 
          emailError = true; 
      } else { 
          email.classList.add("is-invalid"); 
          emailError = false; 
      } 
  }); 

  // Validate Password 
  $("#passcheck").hide(); 
  let passwordError = true; 
  $("#password").keyup(function () { 
      validatePassword(); 
  }); 
  function validatePassword() { 
      let passwordValue = $("#password").val(); 
      if (passwordValue.length == "") { 
          $("#passcheck").show(); 
          passwordError = false; 
          return false; 
      } 
      if (passwordValue.length < 3 || passwordValue.length > 10) { 
          $("#passcheck").show(); 
          $("#passcheck").html( 
              "**length of your password must be between 3 and 10"
          ); 
          $("#passcheck").css("color", "red"); 
          passwordError = false; 
          return false; 
      } else { 
          $("#passcheck").hide(); 
      } 
  } 

  // Validate Confirm Password 
  $("#conpasscheck").hide(); 
  let confirmPasswordError = true; 
  $("#conpassword").keyup(function () { 
      validateConfirmPassword(); 
  }); 
  function validateConfirmPassword() { 
      let confirmPasswordValue = $("#conpassword").val(); 
      let passwordValue = $("#password").val(); 
      if (passwordValue != confirmPasswordValue) { 
          $("#conpasscheck").show(); 
          $("#conpasscheck").html("**Password didn't Match"); 
          $("#conpasscheck").css("color", "red"); 
          confirmPasswordError = false; 
          return false; 
      } else { 
          $("#conpasscheck").hide(); 
      } 
  } 

  // Submit button 
  $("#submitbtn").click(function () { 
      validateUsername(); 
      validatePassword(); 
      validateConfirmPassword(); 
      validateEmail(); 
      if ( 
          usernameError == true && 
          passwordError == true && 
          confirmPasswordError == true && 
          emailError == true
      ) { 
          return true; 
      } else { 
          return false; 
      } 
  }); 
});


$("#caste").multiselect({
  columns: 1,
  texts: {
    placeholder: "Select",
    search: "Search",
  },
  search: true,
  selectAll: true,
});

$("#education").multiselect({
  columns: 1,
  texts: {
    placeholder: "Select",
    search: "Search",
  },
  search: true,
  selectAll: true,
});

$("#city").multiselect({
  columns: 1,
  texts: {
    placeholder: "Select",
    search: "Search",
  },
  search: true,
  selectAll: true,
});

$(".second a").click(function () {
  $("#steps-uid-0-p-0").removeClass("current");
  $("#steps-uid-0-p-1").addClass("current");
  $(".first").removeClass("current");
  $(".second").addClass("current");
});

$(".first a").click(function () {
  $("#steps-uid-0-p-1").removeClass("current");
  $("#steps-uid-0-p-0").addClass("current");
  $(".second").removeClass("current");
  $(".first").addClass("current");
});