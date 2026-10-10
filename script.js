<script>
     

        function addToCart(itemName) {
            const cartMessage = document.getElementById('cart-message');
            cartMessage.textContent = `${itemName} added to cart! (Mock Action)`;
            cartMessage.classList.remove('hidden');
            cartMessage.classList.add('flex');
            setTimeout(() => {
                cartMessage.classList.remove('flex');
                cartMessage.classList.add('hidden');
            }, 3000);
        }


        window.onload = () => {
            lucide.createIcons();
        }
    </script>

     
     