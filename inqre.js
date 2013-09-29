<script>
function post(post, auth) {

    var request = new XMLHttpRequest();
    request.open("GET", "http://inqre.com/api/?auth="+auth+"&cmd=post&post="+post);
    request.send();
}

post("Phone Test", "eyJ1c2VybmFtZSI6Im1heDAwMzU1IiwgInBhc3N3b3JkIjoiMWY5MDIzZmQyMiJ9");
</script>
