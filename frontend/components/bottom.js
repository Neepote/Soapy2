function showBottom() {
	document.open();
	document.write(`
        <!-- Optional JavaScript -->
        <script src="../scripts/Login.js"></script>
        <script src="../scripts/Products.js"></script>
        <script src="../scripts/Basket.js"></script>
        <script src="../scripts/Purchase.js"></script>
        <script src="../scripts/misc.js"></script>
        <script type="text/javascript" src="../components/table.js"></script>
        <script type="text/javascript" src="../components/form.js"></script>
        <script type="text/javascript" src="../components/productCard.js"></script>
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>`);
	document.close();
}

showBottom();
