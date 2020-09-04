# ban list

* How to write filters

	https://help.eyeo.com/en/adblockplus/how-to-write-filters

* Rules

	> !abc

		以 ! 开头代表注释

	> ||example.com

		用于匹配 exmaple.com 这个域名

		匹配

			http://example.com/banner.gif
			https://example.com/banner.gif
			http://www.example.com/banner.gif
			https://www.example.com/banner.gif
			http://subdomain.example.com/banner.gif
			https://subdomain.example.com/banner.gif

		不匹配

			http://badexample.com/banner.gif
			http://gooddomain.example/analyze?http://example.com/banner.gif.

	> |https://ssl.exmaple.com

		用于匹配以 https://ssl.exmaple.com 开头的精确地址

	> example.com

		用于匹配 example.com 这个字符串

		匹配

			http://www.example.com/def
			http://www.xyz.com/search?q=www.example.com

		经常使用
		
			.example.com
			.example.com/ads/*.gif
			http://www.example.com
			https://www.example.com

	> /^https?:\/\/[^\/]+exmaple\.com/

		正则匹配，匹配含有 exmaple.com 字符串的地址
	
	> @@||exmaple.com

		优先级最高
		
		@@||exmaple.com 表示 “匹配 ||exmaple.com” 的地址均禁止匹配
		@@|https://ssl.exmaple.com 表示 “匹配 |https://ssl.exmaple.com” 的地址均禁止匹配
		