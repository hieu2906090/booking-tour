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

# Checkout ra master rồi pull code
git checkout master
git pull

#

# Tạo branch mới theo chức năng
git checkout -b thong/login

# Sau khi code chức năng đầy đủ rồi thì push lên như sau:
# Đứng ở thư mục có file .git

# Nên rebase lại nhánh master để code merge vào nhánh master luôn như sau:
git add .
git commit -m "Mo ta ve lan commit"
git rebase master
git push

# Lần đầu push ở branch mới sẽ có thông báo phải push theo git push --set-upstream origin thong/login

```

### 1.2. Các bước delete branch

- Delete branch ở local

```bash
git branch -D <ten-branch-can-delete>
```

- Delete branch ở remote

```bash
git push origin --delete <ten-branch-can-delete>
```
