/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","999c8f12bc2e12eae1fc36bffbea8480"],["/about/index.html","3d9b426db060791828dd12b7b96ff92d"],["/archives/2018/index.html","78ecd60e3a0b214db2aa863a05f51c3c"],["/archives/2019/index.html","1b398866b24133d401071d3f7e0c4082"],["/archives/index.html","726348dca7c4d909033733012bcc7450"],["/article/0/index.html","80e978465bcb6e03b75f177bdd8f613a"],["/article/16883/index.html","9eeaf367043fafae51c6b279b2ded864"],["/article/19872/index.html","91280f3e875c74e658d6b61bfe64d77e"],["/article/21811/index.html","218f552e1e5afc7c98718f4cdbc9cfdd"],["/article/21872/index.html","376a1e761eb51849d437365ae8c68af1"],["/article/23444/index.html","945bf9a851e11a287efd6fd7aa9bbc8c"],["/article/24762/index.html","4299f386657599402e696232c04fdc21"],["/article/28415/index.html","a662730d32e96bf1050e37ee7d1bad7d"],["/article/33956/index.html","b53cf751413367bbece43969a8253bd8"],["/article/3399/index.html","b09db79b88056274e82e0d8ca5d41bf2"],["/article/38441/index.html","dd5a6efd05c18c761f1ca353ce614813"],["/article/61139/index.html","5318ff318d51ba287e1930eba2e2a5da"],["/article/6bcc/index.html","ce184ad8674287c463d48b9ba59861d0"],["/article/7459/index.html","957eccb5c6dac416eac546c9b28a6f1e"],["/article/8131/index.html","955b96293398366455e7d2b739516c2d"],["/article/c7ae822f/index.html","a2c02d8a2e2987774378ef7eac59d689"],["/article/e699/index.html","8344424193dba873ce26bf276669a800"],["/article/ea29/index.html","bdf78747a43b29fae70caa75a2da5248"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/django/index.html","34e4622c207b2907497cc011409607cf"],["/categories/index.html","7a5334474844f25731a1f4c617de31ae"],["/categories/python/index.html","721d461d1b902c18f36f3f29031a054a"],["/categories/scrapy/index.html","6c28bd314f8cc85cdca3fdc13a2e8d40"],["/categories/前端/index.html","c24b634266dda62aedbb28944f9254db"],["/categories/域名和服务器/index.html","98a21989aa2f9d9798e45582a8693efe"],["/categories/爬虫/index.html","463af90766fb5110c85466c7ad1c3d8d"],["/categories/类的使用/index.html","393775f3363a93fc9a2f7e7aa09365fb"],["/css/bootstrap.min.css","4bf228a5d53faf09e7d0550433792e0b"],["/css/main.css","674008f11df34d75cd7c5d0ce088ab0b"],["/google3b0fb00ae7f0c24a.html","c8bda9cc429398fcf15357eb183ab4bb"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/background.png","8aa3b29e8f54fd64192da118131e60e0"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/icon.gif","e82f0e7381d27484b609cfb9483ccd67"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","3746e106779aca9b52796b57be47cb75"],["/index.html","b50438bb4b30d6babbc48485f9f228ee"],["/js/bootstrap.min.js","bc9ecd80215d6f08518f506410058e42"],["/js/jquery-3.3.1.min.js","f59263f888156cf25adf94282b8eddde"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/anime.min.js","e54ed645f19d7a38f2d9b142bac7b13c"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/custom/activate-power-mode.js","101dedd5dae1e9787644f5d911a825d8"],["/js/src/custom/theme.js","88d33647356ccb87231c65c5a4dc61a6"],["/js/src/custom/wow.min.js","4b253cabaafa86647183695c4c4365e7"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","d37251881f74b993e784003f960a185c"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","82491fe0968278f00ba954f157ee413f"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","bfc5a1db025f2b2baf3a7c09920d6a0f"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","b9b8c9422da2bce88de4cedabb1f5661"],["/lib/jquery_lazyload/README.html","f86e54c5f8260c130fc69e9689d4f827"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","0a5e953084fe0bd5219e7bc7291c552a"],["/page/3/index.html","86ef3db6be04e943a23fdcb8859b867e"],["/page/4/index.html","98bebd1ab8e1e2b2b655a13a9c8efe6a"],["/static/api/css/imgshare.css","249dd1847232b63e73cfd04bf416b370"],["/static/api/css/like.css","44e892352ebf3a845c629659d52a0ea5"],["/static/api/css/select_share.css","98dd25de6f829d1909c1fea715f56735"],["/static/api/css/share_popup.css","36c7855fe53c281e98afd94cc805138b"],["/static/api/css/share_style0_16.css","a994751f130d631ebbf24863d9499c6e"],["/static/api/css/share_style0_24.css","a1abf4177f67405744dd141e8e4cfade"],["/static/api/css/share_style0_32.css","897e7be728bbe5afa367c37360f8c44b"],["/static/api/css/share_style1_16.css","c7f31cdf18e48aec721fcaf5ca36911f"],["/static/api/css/share_style1_24.css","f9a0d8b89158af8015feeaa473e7b6bf"],["/static/api/css/share_style1_32.css","9811c0b803a293e5d2faf7fd87c4d49b"],["/static/api/css/share_style2.css","b45e61921210fedbff5367dd611d4f74"],["/static/api/css/share_style2_16.css","98930d37cb1aad26a6a874c510d57670"],["/static/api/css/share_style2_24.css","e14b327a07f0511d2f02fbfea60c4a22"],["/static/api/css/share_style2_32.css","31be3f23657e730323f3ffd777a016f3"],["/static/api/css/share_style4.css","01a5f7f8e87eeed3964f8040cef2b8f3"],["/static/api/css/slide_share.css","8a5512196a20cd23f15c331f9f7ae671"],["/static/api/css/weixin_popup.css","67b091fe95d743ebb2890e723d9a4466"],["/static/api/img/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","baecf37aeee2bcbedff122bf8f3d3e8b"],["/static/api/js/base/tangram.js","81040e695eba15ff3767063e37768233"],["/static/api/js/component/animate.js","38ea46901ac6a60728406fcf5b737477"],["/static/api/js/component/anticheat.js","f47bd58aec3aa26ea578b95044b9b245"],["/static/api/js/component/comm_tools.js","77247e36d8bcf620d0faa577cb5ac077"],["/static/api/js/component/partners.js","60b64b3e1452ec2abe740687911c4302"],["/static/api/js/component/pop_base.js","a4374af8d1508d034aaefc2d36f92e70"],["/static/api/js/component/pop_dialog.js","12444a745d262069a96b7f39d479767d"],["/static/api/js/component/pop_popup.js","ecb7201c0cdc5a9479eecaf74387b4e1"],["/static/api/js/component/pop_popup_slide.js","216b2f432175cae5d316f8d133ebfae3"],["/static/api/js/component/qrcode.js","d74807f3c8eb0afe40c69c24d69754a9"],["/static/api/js/conf/const.js","9e49aed6498d166e1196503be8724785"],["/static/api/js/conf/define.js","edc8f648433e5fb942e41c9d186a3f08"],["/static/api/js/share.js","e541793a094fa0b301a66538ed5678ab"],["/static/api/js/share/api_base.js","7abf8bdf4939d97f3141e355f781d1c6"],["/static/api/js/share/combine_api.js","e86ac4a099f8f3c5fbc724588d37a7b3"],["/static/api/js/share/image_api.js","b4f9e827c6cfdeed4a8899ca94e85273"],["/static/api/js/share/like_api.js","82e7b74d8b84f8a351df3d86d3693f0a"],["/static/api/js/share/likeshare.js","9eecb7db59d16c80417c72d1e1f4fbf1"],["/static/api/js/share/select_api.js","be599bd13808c256de5b662ba63667f1"],["/static/api/js/share/share_api.js","aeed62b9ab154e66264b41be226108fe"],["/static/api/js/share/slide_api.js","0cdb6ce64560b238ed230353ec14f516"],["/static/api/js/start/router.js","3e9cfc637b10d155381043d30a63fa38"],["/static/api/js/trans/data.js","d41d8cd98f00b204e9800998ecf8427e"],["/static/api/js/trans/logger.js","d41d8cd98f00b204e9800998ecf8427e"],["/static/api/js/trans/trans.js","c35826a8e8c39c2a386e3e4d3cbca282"],["/static/api/js/trans/trans_bdxc.js","8a65a16a683f36ae892343337ac21555"],["/static/api/js/trans/trans_bdysc.js","e759c9e370b39b884b04e222fc21acaa"],["/static/api/js/trans/trans_weixin.js","5c62680f96222ec5671a5905540b6ccf"],["/static/api/js/view/image_view.js","f534297c3d6307a81eb162fc90cb7240"],["/static/api/js/view/like_view.js","d5deb4ffeeeed06ace8f4479df3e0eca"],["/static/api/js/view/select_view.js","29f5d7fc9a474b4ec18ce5f685fc7cec"],["/static/api/js/view/share_view.js","f41f7713e6684dcbcd8304843ae6026d"],["/static/api/js/view/slide_view.js","962eae6aabf14115f23e57b6bd55e23d"],["/static/api/js/view/view_base.js","e719093c5a4ff674bcefbfe80f4dee2b"],["/sw-register.js","fbd335d0bd34a526c2f76f4594df6caf"],["/tags/capture/index.html","aea82170b54867f52ec812c028c5c23e"],["/tags/django/index.html","170fb72d6d76a6d0ae9d25bb0aaec7f2"],["/tags/flink/index.html","19929eaed0e58d1b3790e0e29b845c5e"],["/tags/index.html","955657d9a7ef0eda5fc8c08cde29a0f8"],["/tags/ip/index.html","610e04944162d7d102ffaf5ac2c6541e"],["/tags/mysql/index.html","7ee820ce396096477d06b30845eac49c"],["/tags/python/index.html","33d0feca3b5e3a6eb6f4697e10ead54a"],["/tags/redis/index.html","cc2df38c879f631256fda57d073f9f13"],["/tags/scrapy/index.html","e6d34db6bca859a0a6a27da77d977ab0"],["/tags/spider/index.html","5ca9d34b77822d11ceae9de972c23b99"],["/tags/代理/index.html","d20d37355214f9f0f204835661eba3af"],["/tags/图床/index.html","231feef5e3a3398c8da642ff472c5a2a"],["/tags/字体/index.html","f3429a41e095b9f3647d3da41e37f161"],["/tags/部署/index.html","f135561ae7a478bf6e3e653e4b223549"],["/tags/面向对象/index.html","ec07260c577b6c4cac644d0891fb7f7a"],["/zbj/app.html","b564f8cbb522308a3802889e0fb50bcd"],["/zbj/carouselwarp.html","12787fa9307ada9822dab1b468b6fc0c"],["/zbj/css/1-home.css","8272ec6f699e682dba9352edc1919e6a"],["/zbj/css/carouselwar.css","edd6c3fd8d3da3986a940a3b8817a14b"],["/zbj/css/dycont.css","b824b41ede83086b5a1aac2a7c5631a5"],["/zbj/css/index.css","353dedd74149e9ba2622ec4f81ddfd53"],["/zbj/css/signup.css","3492d352ad139897779b8be3b344d4da"],["/zbj/css/swiper.min.css","9097e7972b059ecae0f5bb78a0186f71"],["/zbj/css/swiper2.css","cf9922a4c3c35c2a611d2ca66404516d"],["/zbj/css/type.css","45f772e780fe29930a34233aca00f5b7"],["/zbj/css/web.css","a65295f49c7293996a03cf6c7cc95d29"],["/zbj/css/▒╧╥╡╔ш╝╞.css","353dedd74149e9ba2622ec4f81ddfd53"],["/zbj/dycont.html","dcf455fc5b65a7972e33f05c0b4246a7"],["/zbj/img/121-bg.jpg","0c9ce25cf38072c908021f230f25200b"],["/zbj/img/DYHAIBAO01.png","71bc44d28ec3c4aa3896ec670d10dc7f"],["/zbj/img/DYHAIBAO010.png","90bf3a957be3bea4a1c1d2c78107b942"],["/zbj/img/DYHAIBAO011.png","f782cfeb30eb06fb0d1823cda90d0ebc"],["/zbj/img/DYHAIBAO012.png","6b6cca0a68c6932fc3218c6e8249b663"],["/zbj/img/DYHAIBAO013.png","77cee6ed7fa5443badbb692462290d7b"],["/zbj/img/DYHAIBAO014.png","ee8fa0bff59c4bc82360bbcf3e2dd56c"],["/zbj/img/DYHAIBAO015.png","58319dabdd3ad6ef08ef30d289b43f85"],["/zbj/img/DYHAIBAO016.png","ba80cb57b40f21f872d60bb080f93fc0"],["/zbj/img/DYHAIBAO017.png","5328ee122b268f0c56ae467502b96cc2"],["/zbj/img/DYHAIBAO018.png","f27dbbfaf486491b497c95ebd49a31dc"],["/zbj/img/DYHAIBAO019.png","f5878b3bb1bad1b0a89b933f5f910e5d"],["/zbj/img/DYHAIBAO02.png","202b3e486178829ef0066e9cd30f51fc"],["/zbj/img/DYHAIBAO020.png","ffd3d0805f991d07665bba6c63ed5ee3"],["/zbj/img/DYHAIBAO03.png","f8612e25012e7d2d220e932a2e2a6441"],["/zbj/img/DYHAIBAO04.png","07446027b2e160e7040bdd9fbdc7e602"],["/zbj/img/DYHAIBAO05.png","36772cb71f888803a0cfad943b7f68fc"],["/zbj/img/DYHAIBAO06.png","5248285fdf11548f9948ed5a899276c2"],["/zbj/img/DYHAIBAO07.png","957f50b03e0073de3023c03632e54748"],["/zbj/img/DYHAIBAO08.png","7c2839436d4f63bb1fdbb18c5f226b30"],["/zbj/img/DYHAIBAO09.png","f5b0cf56e7f6cf6519611d81a4b3b905"],["/zbj/img/ZY02.png","61a47d39d489bdf7f62cbc886333e678"],["/zbj/img/ZY03.png","fece97d86c5c45956a585a9277c2f9c5"],["/zbj/img/ZY04.png","be2eeb3f76bb4f805497f57790d92d5a"],["/zbj/img/ad.png","6922972fbfc6d8b413c2d0ffdd5f6d6e"],["/zbj/img/ap.png","5ebde2bfe43346beb29b52f62bf68144"],["/zbj/img/app.png","15fc10725cdefe7a7757aa42b82e11d8"],["/zbj/img/app01.png","8cd7945f1c5674c61b5f84f8bcc4ee7c"],["/zbj/img/apxn.png","a276e8db246739650862a529dd7197fc"],["/zbj/img/banner_sign.png","714cdc30612d81b95157237341b4743a"],["/zbj/img/bg_1.png","bb185d8351e4913ca3823e613e092a6c"],["/zbj/img/bg_2_03_03.png","26acefab77397770043b992b8716e819"],["/zbj/img/bg_3_03_03_03.png","f92d8abeb3e40482bbf7edc653e8a9fa"],["/zbj/img/bg_4_03_03_03_03.png","99ac4974bc34d76831ba7f226fddd9fc"],["/zbj/img/camera.png","e2e9ceb5f720a82979de67bcdeff71fd"],["/zbj/img/carousel1.png","aed904f8f4c8722e523c3de8ab945057"],["/zbj/img/carousel2.png","e11aa75c5b88305db39acfd31f18147d"],["/zbj/img/carousel3.png","2cdb5fa4b7de8312c4e25b6fe680a9c6"],["/zbj/img/carousel4.png","a353b3f8c8715a1cefb61f79271aefe2"],["/zbj/img/carousel5.png","7ed99a76055ea0338df97b78b714a645"],["/zbj/img/carousel6.png","4c7aa1c4b81a43bc2d50d5d7b3cc598f"],["/zbj/img/code.png","2c299aad06e7172615cbe810476decb8"],["/zbj/img/dypic1.png","96b435d7c958f23bf2dad77d32990f17"],["/zbj/img/dypic2.png","d1140219526a4a8f98c37a66fb2e844d"],["/zbj/img/dypic3.png","e5b5234da4943c7ae78a1306bd2fab18"],["/zbj/img/dypic4.png","4deaf4c5359fe4f7e32cf2c65aee2fee"],["/zbj/img/dypic5.png","5cbc5ec22a0f1a6753adca437c068037"],["/zbj/img/dypic6.png","27afe0627e28ac5780d9244ba27d9dd3"],["/zbj/img/ewm.png","5a722dd948b4b418200a4e1febd2464b"],["/zbj/img/fdj.png","1fd607e01653f607676f700cbc068592"],["/zbj/img/homeico.png","a48003aa2d14fdad727b553037526216"],["/zbj/img/homeico000.png","ab0d49d470b9f44fee91a5df67b765ac"],["/zbj/img/line.png","3fe0f441b15aff9e98d881a75fc8b776"],["/zbj/img/lm01.png","2a03d1bbc0a2bfec36d98ab5d9f85312"],["/zbj/img/lm02.png","981b6e1874fd1df8dc4b4b7ae1107b52"],["/zbj/img/lm03.png","1ce88ac9780c5e12604b80fedd139b8d"],["/zbj/img/lm04.png","30aea5b2af077101a50262da491a13f6"],["/zbj/img/lm05.png","4f481bd5ad488a7f637898775b4fa42b"],["/zbj/img/lm06.png","40f3155aa78f7237052ff4a9c8996123"],["/zbj/img/lm07.png","d0c619d9e945612b90cbf19d2cdb361b"],["/zbj/img/lm08.png","e7437a4557b5573f7abee6d691ca7ebc"],["/zbj/img/phb01.png","b892f6a6c48f172dbf8882aaf1266dc1"],["/zbj/img/phb02.png","47988105d72926eee558ba0b9261ffb3"],["/zbj/img/phb03.png","59cef34ba634657695053d0cc2836e08"],["/zbj/img/phb1.png","bad3741d5b16c13dd778964353425674"],["/zbj/img/phone-icon.png","abb7b3be87d941f33c7f1c9654ff73e3"],["/zbj/img/picC.jpg","68b6f3a9d3712c0de9ca4f67f0ad86b1"],["/zbj/img/picC1.png","198c09461c69acae1ff481d9502487cb"],["/zbj/img/picC1212.jpg","cd3c98f01ec0de20a1d482d1c7c075ef"],["/zbj/img/picC2.png","d547bc3e068b99fa9f35ec5f4e9ec363"],["/zbj/img/picC3.png","d78b2d7f72a12a3ea774e12361ba11e5"],["/zbj/img/picC4.png","3cfd8c6df0a050c0505e0f198beef378"],["/zbj/img/picC5.png","cdabf1bfa15dda5c94c96fe8c6685475"],["/zbj/img/picC6.png","3535c1c05524fddb56613ecd52232ee4"],["/zbj/img/pl01.png","66279918bbb119745e01803c87f2358c"],["/zbj/img/pl02.png","5e7d1aa24ee4e02f3543031925c91bae"],["/zbj/img/pl03.png","14c95ebc80353342283ac5cc9263b891"],["/zbj/img/pl04.png","3d08fffc54a119b7f68568a38e787d43"],["/zbj/img/plugins.png","6acaa776454a8c333a6df655f9dc7b79"],["/zbj/img/tj1.png","dd7760aba0dd7309f0f7ea02e8dc5680"],["/zbj/img/tj2.png","31ac370918200103b96c172d801e6264"],["/zbj/img/tj3.png","b478db23e26d0186788fca3ac8a71ac2"],["/zbj/img/tj4.png","c479b41e8d51f37fac663eaaab7631bb"],["/zbj/img/tj5.png","1b27c1df91a802d27e719fa34fd77e8f"],["/zbj/img/tj6.png","b044c632054a909fd32db6993e8b9ee6"],["/zbj/img/tj7.png","0706254001609234303e3332b2d51534"],["/zbj/img/up.png","0f89f20224b18fd5806cda30b7f45db0"],["/zbj/img/wensha.png","f257a8d27667e0e6c0818b90f9ed3699"],["/zbj/img/wenxing.png","c4783330e0e94a18536023453d7c008a"],["/zbj/img/xsj.png","fa1deca8a629081faa277caf49e246cb"],["/zbj/index.html","288d3267839a547a95f5dd2d6d5b6428"],["/zbj/indexsigned.html","3d471ad0670812d48fb2cf32e4e4997b"],["/zbj/js/jquery-3.4.1.min.js","220afd743d9e9643852e31a135a9f3ae"],["/zbj/js/swiper.min.js","53fc0155c6c3cb55f34b749325ebb370"],["/zbj/signin.html","82b08856683379abbd2ea4437c07dc88"],["/zbj/type.html","f28eceb901d65a6f7b9ef1af30c6f33f"]];
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
