import {db} from "./firebase-config.js";
import {collection, query, orderBy, limit, doc, getDocs, getDoc, addDoc, updateDoc, where} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";
import {checkSession} from "./checksession.js";

// Hiển thị danh sách sản phẩm
export const getProductList = async (container, limitCount) => {
    let htmls = "";

    try {
        const q = query(collection(db,'product'),orderBy("createdAt","desc"),limit(limitCount));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach(doc => {
            const product = doc.data();
            const produceId = doc.id;
            const formattedPrice = new Intl.NumberFormat('vi-VN',{style: "currency", currency: "VND"}).format(product.price);

            htmls += ``
        });
        container.innerHTML = htmls;

        // Thêm sự kiện cho các nút "Đặt hàng"
        let btnOrder = document.querySelectorAll("btn-order");
        btnOrder.forEach(btn => {
            btn.addEventListener("click",function(){
                const produceId = this.getAttribute("data-id");
                checkSession();

                // Gọi hàm hiển thị form đặt hàng
            })
        })

    } catch (err) {
        console.log("Lỗi khi lấy sản phẩm: ",err)
    }
}

// Hiển thị form đặt hàng
const showOrderForm = async () => {
    let orderForm = document.querySelector(".order-form");
    orderForm.style.display = "block";

    try {


    } catch (e) {
        console.log("Lỗi khi lấy thông tin sản phẩm: ",e)
    }
}