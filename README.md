# README CHO ĐỒ ÁN FE12

## 1. MỘT SỐ LỆNH VỚI GIT

### 1.1. Quy trình khi xây dựng một tính năng mới:

Các bước cần làm là:

[1] -> Checkout ra master
[2] -> pull code mới nhất của master về
[3] -> checkout tạo branch mới về tên theo chức năng
[4] -> code chức năng trên branch mới
[5] -> rebase lại với master
[6] -> push code lên branch hiện tại
[7] -> lên github create pull request rồi chờ admin merge code

```bash
# Kiểm tra branch đang có hiện tại
git branch
git branch -a
git branch -r # check branch ở remote

# Checkout ra master rồi pull code

git checkout master
git pull

# Tạo branch mới theo chức năng
git checkout -b thong/login



```
