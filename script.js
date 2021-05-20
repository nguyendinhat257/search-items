var myData = [
    "Nguyễn Đình Nhật",
    "Lê Thị Hoài",
    "Dương Công Quân",
    "Tào Nam Phúc",
    "Ngô Mạnh Tấn",
    "Sào Ba Dương",
    "Vũ Văn Tần",
    "Hà Trọng Phụng",
    "Nguyễn Đình Nam",
    "Bùi Ngọc Trâm Anh",
    "Nguyễn Trần Hà Anh",
    "Vũ Hoàng Gia Bảo",
    "Nguyễn Hữu Bình",
    "Hoàng Trung Dũng",
    "Đồng Mạnh Duy",
    "Nguyễn Ngân Hà",
    "Lưu Ngọc Bảo Hân",
    "Nguyễn Gia Hân",
    "Phạm Ngọc Hân",
    "Nguyễn Minh Hiển",
    "Trần Bảo Long",
    "Đàm Tuệ Minh",
    "Hoàng Đỗ Quang Minh",
    "Trần Lê Minh",
    "Lê Bảo Nam",
    "Nguyễn Diệu Bích Ngân",
    "Vũ Thị Yến Nhi",
    "Nguyễn An Hải Phong",
    "Vũ Thế Phong",
    "Đinh Xuân Phú",
    "Nguyễn Hà Phương",
    "Nguyễn Nhật Quân",
    "Vũ Ngọc Minh Tâm",
    "Đoàn Việt Tùng",
    "Nguyễn Nam Thành",
    "Nguyễn Ngọc Anh Thư",
    "Đào Khánh Trang",
    "Hoàng Ngọc Bảo Trâm",
    "Hoàng Đức Trung",
    "Nguyễn Huyền Lê Vy",
    "Lê Minh Hiếu"
];
var ShowResult = document.querySelector(".show-result");
var ChildItem = document.querySelector(".a");

var inputSearch = document.getElementById("search");
inputSearch.addEventListener("keyup", ()=>{
    var result = myData.filter((item)=>{
        return item.toLowerCase().indexOf(inputSearch.value) >= 0;
    })
    showData(result);
    if(inputSearch.value == "")  ShowResult.innerHTML = "";
});

function showData(result) {
    ShowResult.innerHTML = "";
    for(var i=0; i<result.length; i++) {
        var creates = document.createElement("p");
        creates.innerText = result[i];
        ShowResult.appendChild(creates);
        if (i == 10) break;
    }
    document.body.appendChild(ShowResult);
}






