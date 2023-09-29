```python
import zipfile
import os


def zip_yasuo(start_dir):
    file_news = start_dir + '.zip'
    if not os.path.isfile(file_news):
        z = zipfile.ZipFile(file_news, 'w', zipfile.ZIP_DEFLATED)
        for dir_path, dir_names, file_names in os.walk(start_dir):
            file_path = dir_path.replace(start_dir, '')
            file_path = file_path and file_path + os.sep or ''
            for filename in file_names:
                z.write(os.path.join(dir_path, filename), file_path + filename)
        z.close()


if __name__ == "__main__":
    base_path = r"../test_files"
    base_path_list = os.listdir(base_path)
    for base_path_list_one in base_path_list:
        base_path_list_one_dir = os.path.join(base_path, base_path_list_one)
        # 子目录
        print("准备压缩需要压缩的子目录", base_path_list_one_dir)
        if os.path.isdir(base_path_list_one_dir):
            zip_yasuo(base_path_list_one_dir)


```