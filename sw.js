/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","9c1457f2237ca7d67d74171443bb82a2"],["/about/index.html","f8b6ffd16ee2b42a433fe8a49d1fffea"],["/archives/2018/index.html","0ffaa5a0e31b07f9f20b5dab98cf0aed"],["/archives/index.html","8b8605f50d8cb58b3c2e24deffce4bfa"],["/article/16883/index.html","a17cc8150f40cab3b3853c3bbb6a7ff8"],["/article/19872/index.html","a6b1276fc578ce4a77251b97494b5b59"],["/article/21811/index.html","ce77f78042822c4da45a88410b1a8a37"],["/article/21872/index.html","aaff7b2dea25bbe7034471eb6758d810"],["/article/23444/index.html","11171608dd742d31a6274ba476647599"],["/article/24762/index.html","17fe9339f4deb0f33949b76b3b4798c7"],["/article/28415/index.html","269106cbd42d819278a02a09dbc23cc3"],["/article/33956/index.html","de0647680bb95379a2a7174c5c64f1a3"],["/article/3399/index.html","b38118799c8935e7a92765fd1697ceb3"],["/article/38441/index.html","194f25f91b4641a19b775a3530f35a59"],["/article/61139/index.html","652f644a7340f250ebd788bfb9582812"],["/article/7459/index.html","e32b05d6b9b5878935c223efe86716f6"],["/article/8131/index.html","6db819741703466354e2b27b790bb7d4"],["/article/c7ae822f/index.html","f9a2eddc268e2d2ddc6c17474f279950"],["/article/ea29/index.html","c2a5e3b5b8998156fa9e85966e77f9bd"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/django/index.html","601c3e18b8a59d02b440309b891ca32e"],["/categories/index.html","b4f9ff3f44adb9bd9a356cdc5cb40f56"],["/categories/python/index.html","8614778ff0986a63af9284c258dd5dd9"],["/categories/scrapy/index.html","a921daf533c59d40fd81f2ddd28980c2"],["/categories/前端/index.html","380f3a6ce103fc3fab9057b141452b66"],["/categories/域名和服务器/index.html","c927b6ecc5775a8d0d7b1a38ad14586e"],["/categories/爬虫/index.html","18c41f08f577aaeffc26fba992db11f3"],["/categories/类的使用/index.html","c1760b5fbb0cd1dcf97a5847a302a2a4"],["/css/bootstrap.min.css","4bf228a5d53faf09e7d0550433792e0b"],["/css/main.css","ca283e5e21924c63f89774cc0660565c"],["/google3b0fb00ae7f0c24a.html","46d20d74b219d29476e78b4b4c3f5cba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/background.png","8aa3b29e8f54fd64192da118131e60e0"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/icon.gif","e82f0e7381d27484b609cfb9483ccd67"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3746e106779aca9b52796b57be47cb75"],["/index.html","af07cf0d0f7eb03252828ddff8bf0ecc"],["/js/bootstrap.min.js","e6836664e8c8d3ec8167946a8216c2bf"],["/js/jquery-3.3.1.min.js","15f425fea1acf926943fdcdeb23ef272"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/anime.min.js","e54ed645f19d7a38f2d9b142bac7b13c"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/custom/activate-power-mode.js","101dedd5dae1e9787644f5d911a825d8"],["/js/src/custom/theme.js","88d33647356ccb87231c65c5a4dc61a6"],["/js/src/custom/wow.min.js","4b253cabaafa86647183695c4c4365e7"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","d37251881f74b993e784003f960a185c"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","82491fe0968278f00ba954f157ee413f"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","bfc5a1db025f2b2baf3a7c09920d6a0f"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","b9b8c9422da2bce88de4cedabb1f5661"],["/lib/jquery_lazyload/README.html","f86e54c5f8260c130fc69e9689d4f827"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/loveyueliang.github.io/404.html","874fa290f7264dd1cc66f69d8aeb1acf"],["/loveyueliang.github.io/about/index.html","7f3961584aa752f48dd5a80bbf52ce50"],["/loveyueliang.github.io/archives/2018/index.html","b5d93e8e94a7d3045e9dce2900daa498"],["/loveyueliang.github.io/archives/index.html","640d917d9e84254d264522486f3d41cd"],["/loveyueliang.github.io/article/16883/index.html","24030d8d313188b04ea8c890c3eb54d6"],["/loveyueliang.github.io/article/19872/index.html","e5fbd3580418767820ae3dec4cbfd25c"],["/loveyueliang.github.io/article/21811/index.html","83c58eefc62942d3cfa4e62ccb03d0a9"],["/loveyueliang.github.io/article/21872/index.html","506da9dc39e9932255719af69a568c9d"],["/loveyueliang.github.io/article/23444/index.html","b0b8557addc103437fd0d4e02d8778a2"],["/loveyueliang.github.io/article/24762/index.html","f187ab215801a858d4ef873913eab648"],["/loveyueliang.github.io/article/28415/index.html","6cb90a646fc6973a1fb34cb04016911c"],["/loveyueliang.github.io/article/33956/index.html","011da9336f568c69d6ea98480faedb22"],["/loveyueliang.github.io/article/3399/index.html","125c049130d0bbe403ce46a39ffd61e4"],["/loveyueliang.github.io/article/38441/index.html","210824a70ce135b78f1960b9af192971"],["/loveyueliang.github.io/article/61139/index.html","0d1910502120e80ac04b0b4d34528357"],["/loveyueliang.github.io/article/7459/index.html","490e290adb082fe5d21a5d5b5c6e83bf"],["/loveyueliang.github.io/article/8131/index.html","1b75e26e1d1e0e7de77a31f907555f64"],["/loveyueliang.github.io/article/c7ae822f/index.html","17fd191dddd439be07aba6cf14aedb9f"],["/loveyueliang.github.io/article/ea29/index.html","ed28899b976ba96fef32ce1b64530ce9"],["/loveyueliang.github.io/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/loveyueliang.github.io/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/loveyueliang.github.io/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/loveyueliang.github.io/categories/django/index.html","d486fdfb17830aa3d834a1cbfa315f88"],["/loveyueliang.github.io/categories/index.html","f6123de514cf3c36b1ff9fd33610daf0"],["/loveyueliang.github.io/categories/python/index.html","56caa6f69b7d945addea013151a5b2d0"],["/loveyueliang.github.io/categories/scrapy/index.html","32f350d5a8dbf572fd8171a3141e4421"],["/loveyueliang.github.io/categories/前端/index.html","5f866d8c0a0f4884b0a9a9b273751083"],["/loveyueliang.github.io/categories/域名和服务器/index.html","3fe28c12586a31b3cc3511d35dec8fdc"],["/loveyueliang.github.io/categories/爬虫/index.html","eecf9e9e23b306a911e93ecbf974c945"],["/loveyueliang.github.io/categories/类的使用/index.html","ad8aa368be86a97229c86aa5097d8ad3"],["/loveyueliang.github.io/css/bootstrap.min.css","20d8839e9e66242964258ef70e231763"],["/loveyueliang.github.io/css/main.css","02c76ac5a358902b25657c76ff846c7b"],["/loveyueliang.github.io/google3b0fb00ae7f0c24a.html","06514be2ee031c20746850291cdc90e7"],["/loveyueliang.github.io/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/loveyueliang.github.io/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/loveyueliang.github.io/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/loveyueliang.github.io/images/background.png","8aa3b29e8f54fd64192da118131e60e0"],["/loveyueliang.github.io/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/loveyueliang.github.io/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/loveyueliang.github.io/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/loveyueliang.github.io/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/loveyueliang.github.io/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/loveyueliang.github.io/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/loveyueliang.github.io/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/loveyueliang.github.io/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/loveyueliang.github.io/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/loveyueliang.github.io/images/icon.gif","e82f0e7381d27484b609cfb9483ccd67"],["/loveyueliang.github.io/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/loveyueliang.github.io/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/loveyueliang.github.io/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/loveyueliang.github.io/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/loveyueliang.github.io/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/loveyueliang.github.io/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/loveyueliang.github.io/images/wechatpay.png","3746e106779aca9b52796b57be47cb75"],["/loveyueliang.github.io/index.html","a84b91c4c9619541eb258c2219e95b37"],["/loveyueliang.github.io/js/bootstrap.min.js","3958e2853b11aecee10db9a98c82fb90"],["/loveyueliang.github.io/js/jquery-3.3.1.min.js","977c5b36309422c44c07f2a6f9dbd850"],["/loveyueliang.github.io/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/loveyueliang.github.io/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/loveyueliang.github.io/js/src/anime.min.js","e54ed645f19d7a38f2d9b142bac7b13c"],["/loveyueliang.github.io/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/loveyueliang.github.io/js/src/custom/activate-power-mode.js","101dedd5dae1e9787644f5d911a825d8"],["/loveyueliang.github.io/js/src/custom/theme.js","88d33647356ccb87231c65c5a4dc61a6"],["/loveyueliang.github.io/js/src/custom/wow.min.js","4b253cabaafa86647183695c4c4365e7"],["/loveyueliang.github.io/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/loveyueliang.github.io/js/src/fireworks.js","d37251881f74b993e784003f960a185c"],["/loveyueliang.github.io/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/loveyueliang.github.io/js/src/instantclick.min.js","82491fe0968278f00ba954f157ee413f"],["/loveyueliang.github.io/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/loveyueliang.github.io/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/loveyueliang.github.io/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/loveyueliang.github.io/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/loveyueliang.github.io/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/loveyueliang.github.io/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/loveyueliang.github.io/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/loveyueliang.github.io/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/loveyueliang.github.io/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/loveyueliang.github.io/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/loveyueliang.github.io/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/loveyueliang.github.io/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/loveyueliang.github.io/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/loveyueliang.github.io/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/loveyueliang.github.io/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/loveyueliang.github.io/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/loveyueliang.github.io/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/loveyueliang.github.io/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/loveyueliang.github.io/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/loveyueliang.github.io/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/loveyueliang.github.io/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/loveyueliang.github.io/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/loveyueliang.github.io/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/loveyueliang.github.io/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/loveyueliang.github.io/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/loveyueliang.github.io/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/loveyueliang.github.io/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/loveyueliang.github.io/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/loveyueliang.github.io/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/loveyueliang.github.io/lib/fastclick/README.html","bfc5a1db025f2b2baf3a7c09920d6a0f"],["/loveyueliang.github.io/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/loveyueliang.github.io/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/loveyueliang.github.io/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/loveyueliang.github.io/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/loveyueliang.github.io/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/loveyueliang.github.io/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/loveyueliang.github.io/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/loveyueliang.github.io/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/loveyueliang.github.io/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/loveyueliang.github.io/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/loveyueliang.github.io/lib/jquery_lazyload/CONTRIBUTING.html","b9b8c9422da2bce88de4cedabb1f5661"],["/loveyueliang.github.io/lib/jquery_lazyload/README.html","f86e54c5f8260c130fc69e9689d4f827"],["/loveyueliang.github.io/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/loveyueliang.github.io/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/loveyueliang.github.io/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/loveyueliang.github.io/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/loveyueliang.github.io/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/loveyueliang.github.io/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/loveyueliang.github.io/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/loveyueliang.github.io/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/loveyueliang.github.io/page/2/index.html","99c948c9be242eaa2fa3cca84f0a343b"],["/loveyueliang.github.io/page/3/index.html","d19c1ec0271cc0dd71c3c843ef84f8a8"],["/loveyueliang.github.io/static/api/css/imgshare.css","249dd1847232b63e73cfd04bf416b370"],["/loveyueliang.github.io/static/api/css/like.css","44e892352ebf3a845c629659d52a0ea5"],["/loveyueliang.github.io/static/api/css/select_share.css","98dd25de6f829d1909c1fea715f56735"],["/loveyueliang.github.io/static/api/css/share_popup.css","36c7855fe53c281e98afd94cc805138b"],["/loveyueliang.github.io/static/api/css/share_style0_16.css","a994751f130d631ebbf24863d9499c6e"],["/loveyueliang.github.io/static/api/css/share_style0_24.css","a1abf4177f67405744dd141e8e4cfade"],["/loveyueliang.github.io/static/api/css/share_style0_32.css","897e7be728bbe5afa367c37360f8c44b"],["/loveyueliang.github.io/static/api/css/share_style1_16.css","c7f31cdf18e48aec721fcaf5ca36911f"],["/loveyueliang.github.io/static/api/css/share_style1_24.css","f9a0d8b89158af8015feeaa473e7b6bf"],["/loveyueliang.github.io/static/api/css/share_style1_32.css","9811c0b803a293e5d2faf7fd87c4d49b"],["/loveyueliang.github.io/static/api/css/share_style2.css","b45e61921210fedbff5367dd611d4f74"],["/loveyueliang.github.io/static/api/css/share_style2_16.css","98930d37cb1aad26a6a874c510d57670"],["/loveyueliang.github.io/static/api/css/share_style2_24.css","e14b327a07f0511d2f02fbfea60c4a22"],["/loveyueliang.github.io/static/api/css/share_style2_32.css","31be3f23657e730323f3ffd777a016f3"],["/loveyueliang.github.io/static/api/css/share_style4.css","01a5f7f8e87eeed3964f8040cef2b8f3"],["/loveyueliang.github.io/static/api/css/slide_share.css","8a5512196a20cd23f15c331f9f7ae671"],["/loveyueliang.github.io/static/api/css/weixin_popup.css","67b091fe95d743ebb2890e723d9a4466"],["/loveyueliang.github.io/static/api/img/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/loveyueliang.github.io/static/api/img/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/loveyueliang.github.io/static/api/img/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/loveyueliang.github.io/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/loveyueliang.github.io/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/loveyueliang.github.io/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/loveyueliang.github.io/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/loveyueliang.github.io/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/loveyueliang.github.io/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/loveyueliang.github.io/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/loveyueliang.github.io/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/loveyueliang.github.io/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/loveyueliang.github.io/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/loveyueliang.github.io/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/loveyueliang.github.io/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/loveyueliang.github.io/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/loveyueliang.github.io/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/loveyueliang.github.io/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/loveyueliang.github.io/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/loveyueliang.github.io/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/loveyueliang.github.io/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/loveyueliang.github.io/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/loveyueliang.github.io/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/loveyueliang.github.io/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/loveyueliang.github.io/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/loveyueliang.github.io/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/loveyueliang.github.io/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/loveyueliang.github.io/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/loveyueliang.github.io/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/loveyueliang.github.io/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/loveyueliang.github.io/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/loveyueliang.github.io/static/api/js/base/class.js","baecf37aeee2bcbedff122bf8f3d3e8b"],["/loveyueliang.github.io/static/api/js/base/tangram.js","81040e695eba15ff3767063e37768233"],["/loveyueliang.github.io/static/api/js/component/animate.js","38ea46901ac6a60728406fcf5b737477"],["/loveyueliang.github.io/static/api/js/component/anticheat.js","f47bd58aec3aa26ea578b95044b9b245"],["/loveyueliang.github.io/static/api/js/component/comm_tools.js","77247e36d8bcf620d0faa577cb5ac077"],["/loveyueliang.github.io/static/api/js/component/partners.js","60b64b3e1452ec2abe740687911c4302"],["/loveyueliang.github.io/static/api/js/component/pop_base.js","a4374af8d1508d034aaefc2d36f92e70"],["/loveyueliang.github.io/static/api/js/component/pop_dialog.js","12444a745d262069a96b7f39d479767d"],["/loveyueliang.github.io/static/api/js/component/pop_popup.js","ecb7201c0cdc5a9479eecaf74387b4e1"],["/loveyueliang.github.io/static/api/js/component/pop_popup_slide.js","216b2f432175cae5d316f8d133ebfae3"],["/loveyueliang.github.io/static/api/js/component/qrcode.js","d74807f3c8eb0afe40c69c24d69754a9"],["/loveyueliang.github.io/static/api/js/conf/const.js","9e49aed6498d166e1196503be8724785"],["/loveyueliang.github.io/static/api/js/conf/define.js","edc8f648433e5fb942e41c9d186a3f08"],["/loveyueliang.github.io/static/api/js/share.js","e541793a094fa0b301a66538ed5678ab"],["/loveyueliang.github.io/static/api/js/share/api_base.js","7abf8bdf4939d97f3141e355f781d1c6"],["/loveyueliang.github.io/static/api/js/share/combine_api.js","e86ac4a099f8f3c5fbc724588d37a7b3"],["/loveyueliang.github.io/static/api/js/share/image_api.js","b4f9e827c6cfdeed4a8899ca94e85273"],["/loveyueliang.github.io/static/api/js/share/like_api.js","82e7b74d8b84f8a351df3d86d3693f0a"],["/loveyueliang.github.io/static/api/js/share/likeshare.js","9eecb7db59d16c80417c72d1e1f4fbf1"],["/loveyueliang.github.io/static/api/js/share/select_api.js","be599bd13808c256de5b662ba63667f1"],["/loveyueliang.github.io/static/api/js/share/share_api.js","aeed62b9ab154e66264b41be226108fe"],["/loveyueliang.github.io/static/api/js/share/slide_api.js","0cdb6ce64560b238ed230353ec14f516"],["/loveyueliang.github.io/static/api/js/start/router.js","3e9cfc637b10d155381043d30a63fa38"],["/loveyueliang.github.io/static/api/js/trans/data.js","d41d8cd98f00b204e9800998ecf8427e"],["/loveyueliang.github.io/static/api/js/trans/logger.js","d41d8cd98f00b204e9800998ecf8427e"],["/loveyueliang.github.io/static/api/js/trans/trans.js","c35826a8e8c39c2a386e3e4d3cbca282"],["/loveyueliang.github.io/static/api/js/trans/trans_bdxc.js","8a65a16a683f36ae892343337ac21555"],["/loveyueliang.github.io/static/api/js/trans/trans_bdysc.js","e759c9e370b39b884b04e222fc21acaa"],["/loveyueliang.github.io/static/api/js/trans/trans_weixin.js","5c62680f96222ec5671a5905540b6ccf"],["/loveyueliang.github.io/static/api/js/view/image_view.js","f534297c3d6307a81eb162fc90cb7240"],["/loveyueliang.github.io/static/api/js/view/like_view.js","d5deb4ffeeeed06ace8f4479df3e0eca"],["/loveyueliang.github.io/static/api/js/view/select_view.js","29f5d7fc9a474b4ec18ce5f685fc7cec"],["/loveyueliang.github.io/static/api/js/view/share_view.js","f41f7713e6684dcbcd8304843ae6026d"],["/loveyueliang.github.io/static/api/js/view/slide_view.js","962eae6aabf14115f23e57b6bd55e23d"],["/loveyueliang.github.io/static/api/js/view/view_base.js","e719093c5a4ff674bcefbfe80f4dee2b"],["/loveyueliang.github.io/sw-register.js","3e9edf60285b8a3501c3bee85da13374"],["/loveyueliang.github.io/sw.js","432e3163cde265c7111ea15e3b923db5"],["/loveyueliang.github.io/tags/capture/index.html","21569b33877f2ec49a040672c71a5ba0"],["/loveyueliang.github.io/tags/django/index.html","831a0f687f09b4a80e28d40a66fdc65e"],["/loveyueliang.github.io/tags/index.html","54cc252999eb3cc8ecfb76a40d399d5d"],["/loveyueliang.github.io/tags/ip/index.html","59e5760df83ce17953a1284d245207d9"],["/loveyueliang.github.io/tags/mysql/index.html","331d455d2ee4bb859840a8c1b112c498"],["/loveyueliang.github.io/tags/python/index.html","7bd67883a442331e4e4f035362376a3a"],["/loveyueliang.github.io/tags/redis/index.html","6e207889f6e7a9a592269b7de551adde"],["/loveyueliang.github.io/tags/scrapy/index.html","1470103e38ca5256b33ee1bd5eb1b43d"],["/loveyueliang.github.io/tags/spider/index.html","9288d0244b95f61fe85641dfabaabc0b"],["/loveyueliang.github.io/tags/代理/index.html","373366d304da564b97e631e5940b346d"],["/loveyueliang.github.io/tags/图床/index.html","b9c5ef5a5e75f817e2ecb82e7fc6764f"],["/loveyueliang.github.io/tags/字体/index.html","aa564e1401b7d49dc6ecf7a244dbadf0"],["/loveyueliang.github.io/tags/部署/index.html","0ce7bc23cb01b395afa6a532ba8b09c8"],["/loveyueliang.github.io/tags/面向对象/index.html","e9a3cfb8a77a91ddf188bb9f90ad15e1"],["/page/2/index.html","564313d5e6b1c0a1763798f294089774"],["/page/3/index.html","6dcbeacb27dcb99b8854555ec20e57d7"],["/static/api/css/imgshare.css","249dd1847232b63e73cfd04bf416b370"],["/static/api/css/like.css","44e892352ebf3a845c629659d52a0ea5"],["/static/api/css/select_share.css","98dd25de6f829d1909c1fea715f56735"],["/static/api/css/share_popup.css","36c7855fe53c281e98afd94cc805138b"],["/static/api/css/share_style0_16.css","a994751f130d631ebbf24863d9499c6e"],["/static/api/css/share_style0_24.css","a1abf4177f67405744dd141e8e4cfade"],["/static/api/css/share_style0_32.css","897e7be728bbe5afa367c37360f8c44b"],["/static/api/css/share_style1_16.css","c7f31cdf18e48aec721fcaf5ca36911f"],["/static/api/css/share_style1_24.css","f9a0d8b89158af8015feeaa473e7b6bf"],["/static/api/css/share_style1_32.css","9811c0b803a293e5d2faf7fd87c4d49b"],["/static/api/css/share_style2.css","b45e61921210fedbff5367dd611d4f74"],["/static/api/css/share_style2_16.css","98930d37cb1aad26a6a874c510d57670"],["/static/api/css/share_style2_24.css","e14b327a07f0511d2f02fbfea60c4a22"],["/static/api/css/share_style2_32.css","31be3f23657e730323f3ffd777a016f3"],["/static/api/css/share_style4.css","01a5f7f8e87eeed3964f8040cef2b8f3"],["/static/api/css/slide_share.css","8a5512196a20cd23f15c331f9f7ae671"],["/static/api/css/weixin_popup.css","67b091fe95d743ebb2890e723d9a4466"],["/static/api/img/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","baecf37aeee2bcbedff122bf8f3d3e8b"],["/static/api/js/base/tangram.js","81040e695eba15ff3767063e37768233"],["/static/api/js/component/animate.js","38ea46901ac6a60728406fcf5b737477"],["/static/api/js/component/anticheat.js","f47bd58aec3aa26ea578b95044b9b245"],["/static/api/js/component/comm_tools.js","77247e36d8bcf620d0faa577cb5ac077"],["/static/api/js/component/partners.js","60b64b3e1452ec2abe740687911c4302"],["/static/api/js/component/pop_base.js","a4374af8d1508d034aaefc2d36f92e70"],["/static/api/js/component/pop_dialog.js","12444a745d262069a96b7f39d479767d"],["/static/api/js/component/pop_popup.js","ecb7201c0cdc5a9479eecaf74387b4e1"],["/static/api/js/component/pop_popup_slide.js","216b2f432175cae5d316f8d133ebfae3"],["/static/api/js/component/qrcode.js","d74807f3c8eb0afe40c69c24d69754a9"],["/static/api/js/conf/const.js","9e49aed6498d166e1196503be8724785"],["/static/api/js/conf/define.js","edc8f648433e5fb942e41c9d186a3f08"],["/static/api/js/share.js","e541793a094fa0b301a66538ed5678ab"],["/static/api/js/share/api_base.js","7abf8bdf4939d97f3141e355f781d1c6"],["/static/api/js/share/combine_api.js","e86ac4a099f8f3c5fbc724588d37a7b3"],["/static/api/js/share/image_api.js","b4f9e827c6cfdeed4a8899ca94e85273"],["/static/api/js/share/like_api.js","82e7b74d8b84f8a351df3d86d3693f0a"],["/static/api/js/share/likeshare.js","9eecb7db59d16c80417c72d1e1f4fbf1"],["/static/api/js/share/select_api.js","be599bd13808c256de5b662ba63667f1"],["/static/api/js/share/share_api.js","aeed62b9ab154e66264b41be226108fe"],["/static/api/js/share/slide_api.js","0cdb6ce64560b238ed230353ec14f516"],["/static/api/js/start/router.js","3e9cfc637b10d155381043d30a63fa38"],["/static/api/js/trans/data.js","d41d8cd98f00b204e9800998ecf8427e"],["/static/api/js/trans/logger.js","d41d8cd98f00b204e9800998ecf8427e"],["/static/api/js/trans/trans.js","c35826a8e8c39c2a386e3e4d3cbca282"],["/static/api/js/trans/trans_bdxc.js","8a65a16a683f36ae892343337ac21555"],["/static/api/js/trans/trans_bdysc.js","e759c9e370b39b884b04e222fc21acaa"],["/static/api/js/trans/trans_weixin.js","5c62680f96222ec5671a5905540b6ccf"],["/static/api/js/view/image_view.js","f534297c3d6307a81eb162fc90cb7240"],["/static/api/js/view/like_view.js","d5deb4ffeeeed06ace8f4479df3e0eca"],["/static/api/js/view/select_view.js","29f5d7fc9a474b4ec18ce5f685fc7cec"],["/static/api/js/view/share_view.js","f41f7713e6684dcbcd8304843ae6026d"],["/static/api/js/view/slide_view.js","962eae6aabf14115f23e57b6bd55e23d"],["/static/api/js/view/view_base.js","e719093c5a4ff674bcefbfe80f4dee2b"],["/tags/capture/index.html","e9ae2b9885ba9c1d754348d312480e9d"],["/tags/django/index.html","36b6ba13c6cacd714473a486d69d0a4e"],["/tags/index.html","0f4d252660ec0a4ad4a59a65b5a23e50"],["/tags/ip/index.html","c54699a54beb83b7baf383fb36145594"],["/tags/mysql/index.html","5848739e800a1be543647c15ee3c0f67"],["/tags/python/index.html","cbb89dfc54d067b5f34f3c9bee6fdc9a"],["/tags/redis/index.html","a8c95ae09c58bdee5b515c14b07d6338"],["/tags/scrapy/index.html","a0056173a4608dbdc16f5437f41e414f"],["/tags/spider/index.html","7170ed4dd4cf3c291517aa327bedd40a"],["/tags/代理/index.html","550eca6e3ce946a12acdb1e458eb36f9"],["/tags/图床/index.html","d24fa8036c5a67c621a7780b8fbb4942"],["/tags/字体/index.html","e33e55cae22faa27de4aa5af225c7b4e"],["/tags/部署/index.html","677e06b21578866a84ae2402f58980b4"],["/tags/面向对象/index.html","67ba4c4cb128a76e1d74349e55894d1d"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
