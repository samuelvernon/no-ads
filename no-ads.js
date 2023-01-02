'use strict';

// chrome.runtime.onInstalled.addListener(function(details) {
	// alert('loaded');
	// // chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
		// // chrome.declarativeContent.onPageChanged.addRules([rule2]);
	// // });
// });

function ads() {
			
		var style = 'position: fixed !important; left: -1000vw !important; top: -1000vh !important; z-index: -1 !important; height: 0; width: 0; overflow: hidden;';
		var styleFile = '';
		var strings = [
			'a-ad',
			'[class*="a-ad-"]',
			'[class*="_ad_"]',
			'[class*="ad-microsites"]',
			'[class*="addelivered"]',
			'[class*="ad-wrapper"]',
			'[class*="brid"]',
			'[class*="hstp_"]',
			'[class*="img-ad"]',
			'[class*="_pushdown"]',
			'[class*="ps-tracking-comlinks"]',
			'[class*="tbl-next"]',
			'[class*="teads-inread"]',
			'[class*="video-ads"]', // youtube start
			'[class*="ytp-ad-overlay-container"]',
			'[class*="ytd-comments"]', // youtube comments //  youtube end
			'[data-service-slot-initialized]>iframe',
			'[href*="ad11"]',
			'[href*="adfarm"]',
			'[href*="adheader"]',
			'[href*="adnxs"]',
			'[href*="doubleclick"]',
			'[src*="banner"]',
			'[src*="adfarm"]',
			'[src*="clickurl"]',
			'[src*="emsservice"]',
			'[src*="flashtalking"]',
			'[src*="doubleclick"]',
			'[name*="banner"]',
			// '[id*="banner"]',
			'[id*="adnxs"]',
			'[id*="player-ads"]',
			'[id*="_ems_"]',
			'[id*="emsBackground"]',
			'[id*="outbrain"]',
			'[data-qa*="Commercial"]',
			'[data-adservice-param-tagid*="e"]',
			'[data-ad*="e"]',
			'[data-bind*="LiquidAds"]',
			'iframe[id^="sky_"]',
			'[id*="_psbk_"]',
			'[id*="_sky"]',
			'[id*="dblclkbnr"]',
			'[id*="uc-cross-domain-bridge"]',
			'[data-tr-doc-type*="InlineAd"]',
			'[data-item-thumb*="taboola"]',
			'[data-google-query-id*="-"]',
			'[data-google-query-id*="a"]',
			'[data-google-query-id*="e"]',
			'[data-google-query-id*="i"]',
			'[data-google-query-id*="o"]',
			'[data-google-query-id*="u"]',
			'iframe[width="728"][height="90"]',
			'[class*="video-ads"]',
			'[class*="ytp-ad-module"]',
			'[data-ad-client*="ca"]',
			'[jpx-object-id]',
			'[ytd-third-party-manager]',
			// '[referrerpolicy]',
		];

		for (var i = 0; i < strings.length; i++) {
				document.querySelectorAll( 'html ' + strings[i]).forEach((item) => {
						// item.setAttribute('style', style);
						item.remove();
				});
		}

}

function youTube() {
	
	if (  document.getElementsByTagName('ytd-app') && document.getElementsByTagName('ytd-app').length > 0 ) {
		var button;
		
		if ( document.querySelector('.ytp-ad-skip-button') == null ) {
			button = document.createElement('button');
			button.classList.add('ytp-ad-skip-button');
			button.classList.add('ytp-button');
			
			document.querySelector('.html5-video-player').append( button );
			// button
		} else {
			button = document.querySelector('.ytp-ad-skip-button');
		}
		
		button.setAttribute( 'style', 'display: flex !important; position: absolute; right: 1rem; top: 1rem; z-index: 100;');
		button.innerHTML = 'NoAdds 2.0';
		console.log('NoAdds 2.0');
	}
	
}

function doIt() {
	// youTube();
	ads();
};

(function() {

	setTimeout( () => {
		document.addEventListener('DOMContentLoaded', function( event ) { doIt(); }, false);	
		window.onload = function( event ) { doIt(); }
		window.onchange = function( event ) { doIt(); }
		window.onscroll = function( event ) { doIt(); }
		window.onmouseenter = function( event ) { doIt(); }
		document.querySelector('body').addEventListener( 'change', function( event ) { doIt(); } );
	}, 2000 );
	
	
	

})();

