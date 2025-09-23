# D10S

This repository demonstrates how to manage binary files by using [Git LFS](https://git-lfs.github.com/) to avoid storing large binaries directly in Git.

## Binary files

Binary assets such as images should be tracked with Git LFS.
To track PNG files:

```
git lfs install
git lfs track "*.png"
```

This generates a `.gitattributes` file that tells Git to manage `*.png` files via LFS.

## Example

The file `pixel.png` is tracked with Git LFS and referenced from `index.html`:

```
<img src="pixel.png" alt="1x1 transparent pixel" />
```

## Workflow

1. Add any binary files matching the tracked patterns.
2. Commit as usual; Git LFS stores the binaries separately and keeps the repository lightweight.
3. Ensure all collaborators run `git lfs install` to enable LFS support locally.
