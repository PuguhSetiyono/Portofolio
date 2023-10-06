const app = Vue.createApp({
    data() {
        return {
            products: [
                { name: 'Kemeja', price: 124000, image: 'img/Kemeja.png' },
                { name: 'Kacamata', price: 137000, image: 'img/Kacamata.png' },
                { name: 'Sepatu', price: 290000, image: 'img/Sepatu.png' },
                { name: 'Jaket', price: 239000, image: 'img/Jaket.png' },
                { name: 'Buku', price: 54000, image: 'img/buku.png' }
            
            ],
            cart: [],
            wallet: '',
            addWallet: [
                { amount: 5000 },
                { amount: 10000 },
                { amount: 15000},
                { amount: 20000 },
                { amount: 50000 },
                { amount: 100000 },
                { amount: 75000 },
            ]
        };
    },
    methods: {
        addToCart(product, isDuplicate = false) {
            const existingItem = this.cart.find(item => item.name === product.name);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                this.cart.push({ name: product.name, price: product.price, quantity: 1, image: product.image });
            }
        },
        formatNumber(number) {
            // Menggunakan metode toLocaleString untuk menambahkan titik sebagai pemisah ribuan
            return number.toLocaleString('id-ID');
        },
        addAmount(amount) {
            this.wallet = (parseFloat(this.wallet || 0) + amount);
        },
        removeFromCart(index) {
            const item = this.cart[index];

            if (item.quantity > 1) {
                item.quantity--;
            } else {
                // hapus jika sisa 1
                this.cart.splice(index, 1);
            }
        },
        getTotal() {
            return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
        },
        resetWallet() {
            // Reset nilai wallet menjadi 0
            this.wallet = '0';
        }
    }
});
app.mount('#app');