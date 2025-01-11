//s : glnb 스크립트
    //pc, mobile 클래스 추가
    function updateGlnbClass() {
        const glnbWrap = document.querySelector('.glnb_wrap');

        if (window.innerWidth < 1024) {
            glnbWrap.classList.add('m_screen');
            glnbWrap.classList.remove('pc_screen');
        } else {
            glnbWrap.classList.add('pc_screen');
            glnbWrap.classList.remove('m_screen');
        }
    }

    // Initial check
    updateGlnbClass();

    // Update on resize
    window.addEventListener('resize', updateGlnbClass);



    $(function() {
        // 메뉴 버튼 클릭 시 메뉴 표시
        $(".util_btn_menu button").click(function() {
            $(".menu_wrap").toggle(); // 메뉴를 보이거나 숨깁니다.
        });

        // 모바일 전용 코드
        $(document).on('click', '.m_screen .depth1', function() {
            var target = $(this).data('target'); // 클릭한 버튼의 data-target 속성 값 가져오기
            
            // 모든 .lnb_wrap 요소를 숨깁니다.
            $('.lnb_wrap').not(target).slideUp();
            
            // 클릭한 버튼에 해당하는 .lnb_wrap 요소만 토글합니다.
            $(target).slideToggle();
        });

        // PC 전용 코드
        $(document).on('mouseover', '.pc_screen .depth1_list', function() {
            // 현재 항목의 서브 메뉴만 표시
            $(this).find(".lnb_wrap").stop(true, true).slideDown();
        }).on('mouseleave', '.pc_screen .depth1_list', function() {
            // 현재 항목의 서브 메뉴만 숨기기
            $(this).find(".lnb_wrap").stop(true, true).slideUp();
        });
    });

//e : glnb 스크립트