<script>
function post(post, auth) {

    var request = new XMLHttpRequest();
    request.open("GET", "http://inqre.com/api/?auth="+auth+"&cmd=post&post="+post);
    request.send();
}

post("Phone Test", "
");
</script>
