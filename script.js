function isAppleDevice() {
    const userAgent =
      navigator.userAgent || navigator.vendor || window.opera;
  
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return true;
    }
  
    if (/Macintosh|Mac OS X/.test(userAgent)) {
      return true;
    }
  
    return false;
  }
  
  
  AFRAME.registerComponent("mytarget", {
    init: function () {
      const showInfo = () =>
		{
			let y = 0;

			const websiteButton = document.querySelector( "#website-btn" );
      const locationButton = document.querySelector( "#location-btn" );

			
			
      setTimeout( () =>
			{
				locationButton.setAttribute( "visible", true );
			}, 500 );
      setTimeout( () =>
			{
				websiteButton.setAttribute( "visible", true );
			}, 600 );

		
			locationButton.addEventListener( 'click', function ( evt )
			{
				window.location.href = "https://g.co/kgs/9uN2vve";
			} );
			websiteButton.addEventListener( 'click', function ( evt )
			{
				window.location.href = "https://www.google.com";
			} );
		}
    
      this.el.addEventListener("targetFound", (event) => {
        setTimeout( () =>
					{
						showInfo();
					}, 300 );
      });
  
      this.el.addEventListener("targetLost", (event) => {  
      });
    },
  });
  
 