

export default function ajax(option) {

    // 封装的整体思路：用户输入请求配置对象--使用xmlhttprequest对象以这个用户的请求配置对象发送请求--最后把reponse响应结果传递给用户的success函数既可
    // 具体封装的步骤
    // 第一步：因为xmlhttprequest不管是get还是post都需要将data即携带参数转换为查询字符串的形式才能够发送 ，这里统一转换
    function resolvedata(data) {
        // 遍历data对象并拼接为查询字符串
        var strs = [];
        var str;
        // 拼接成的查询字符串中间的&符号两种思路：一种是join（&）数组转换为字符串，一种是每次拼接时都加上&符号 
        // 最后拼接好的减去末尾的字符&就可以了（这需要字符串处理方法 或者正则提取）但我都不会 所以此处采用一个对k的判断-如果k不是最后一个k才追加&符号.但是对象不是
        // 数组没有length 作罢，或者判断k是不是publisher-但又不能局限用户输入的顺序 用户可以把publisher属性写前边 作罢，以k+1的值是不是空为条件进行判断 k
        // 根本不是下标。。。 forin语句也没有提供下标的形参 没有提供判断的参数.可以先转换为数组，然后再从数组中移除 还是数组灵活. 最终还是才用了字符串数组使用
        // join方法转换为字符串

        for (var k in data) {
            str = `${k}=${data[k]}`;
            strs.push(str);
        }
        return strs.join('&');
    };
    var selstr = resolvedata(option.data);

    var xhr=new XMLHttpRequest();

    // 判断请求类型 分别处理
    if(option.method.toUpperCase()==='GET'){
        // 把查询字符串拼接到url
        xhr.open(option.method.toUpperCase(),option.url+=('?'+selstr));
        xhr.send();
        // 原生xml拿到reponse给到用户的回调函数去使用
        xhr.onreadystatechange=()=>{
            if(xhr.readyState===4&&xhr.status===200){
                option.success(xhr.responseText);
            }
        }
    }else if(option.method.toUpperCase()==='POST'){
        xhr.open(option.method.toUpperCase(),option.url);
        // 原生ajax发送post请求需要设置请求头的contenttype属性 在send之前
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        xhr.send(selstr);
        // 同理
        xhr.onreadystatechange=()=>{
            if(xhr.readyState===4&&xhr.status===200){
                option.success(xhr.responseText);
            }
        }
    }


   
}

