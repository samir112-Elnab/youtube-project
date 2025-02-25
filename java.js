
  // التأكد من تحميل الصفحة بالكامل
  window.onload = function() {
    // عرض رسالة ترحيب عند تحميل الصفحة
    console.log("تم تحميل الصفحة بنجاح!");

    // تفعيل البحث عند الضغط على زر البحث
    const searchButton = document.querySelector('.search button');
    const searchInput = document.querySelector('.search input');
    
    searchButton.addEventListener('click', function(event) {
      event.preventDefault(); // لمنع إعادة تحميل الصفحة
      const query = searchInput.value;
      if (query) {
        alert('تم البحث عن: ' + query);
      } else {
        alert('يرجى إدخال نص للبحث');
      }
    });

    // تفعيل أيقونة الميكروفون لإشعار المستخدم
    const micIcon = document.querySelector('.mic');
    micIcon.addEventListener('click', function() {
      alert('الميكروفون غير مفعل حالياً');
    });
  };
 
