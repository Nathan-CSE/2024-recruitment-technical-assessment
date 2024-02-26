from dataclasses import dataclass

@dataclass
class File:
    id: int
    name: str
    categories: list[str]
    parent: int
    size: int

class Graph:
    def __init__(self):
        self.adjacency_list = {}

    def add_edge(self, u, v):
        if u not in self.adjacency_list:
            self.adjacency_list[u] = []
        self.adjacency_list[u].append(v)

def construct_graph(files):
    graph = Graph()
    for file in files:
        if file.parent != -1:
            graph.add_edge(file.parent, file.id)
    return graph

"""
Task 1
"""
# Return all files that have no child 
def leafFiles(files: list[File]) -> list[str]:
    graph = construct_graph(files)
    leaves = []

    # Return all nodes that do not have a child
    def dfs(node):
        if node not in graph.adjacency_list:
            leaves.append(node)
        else:
            for neighbor in graph.adjacency_list[node]:
                dfs(neighbor)

    for file in files:
        dfs(file.id)

    return [file.name for file in files if file.id in leaves]


"""
Task 2
"""
def kLargestCategories(files: list[File], k: int) -> list[str]:
    category_counts = {}

    # Simpler to not use graphs for this lol
    for file in files:
        for category in file.categories:
            if category not in category_counts:
                category_counts[category] = 0
            category_counts[category] += 1

    sorted_categories = sorted(category_counts.items(), key=lambda x: (-x[1], x[0]))
    result = [category for category, count in sorted_categories]
    return result[:k]


"""
Task 3
"""
def largestFileSize(files: list[File]) -> int:
    graph = construct_graph(files)
    max_size = 0

    def dfs(node):
        total_size = 0

        # Iterate through all the nodes in the graph
        for file in files:
            
            # Start dfs once we get to the inital node
            if file.id == node:
                total_size = file.size

                # Keep iterating until  we reach the end
                if node in graph.adjacency_list:
                    for child_id in graph.adjacency_list[node]:
                        total_size += dfs(child_id)
                break
        
        # Return the total size of that file
        return total_size

    for file in files:
        file_size = dfs(file.id)
        max_size = max(max_size, file_size)

    return max_size


if __name__ == '__main__':
    testFiles = [
        File(1, "Document.txt", ["Documents"], 3, 1024),
        File(2, "Image.jpg", ["Media", "Photos"], 34, 2048),
        File(3, "Folder", ["Folder"], -1, 0),
        File(5, "Spreadsheet.xlsx", ["Documents", "Excel"], 3, 4096),
        File(8, "Backup.zip", ["Backup"], 233, 8192),
        File(13, "Presentation.pptx", ["Documents", "Presentation"], 3, 3072),
        File(21, "Video.mp4", ["Media", "Videos"], 34, 6144),
        File(34, "Folder2", ["Folder"], 3, 0),
        File(55, "Code.py", ["Programming"], -1, 1536),
        File(89, "Audio.mp3", ["Media", "Audio"], 34, 2560),
        File(144, "Spreadsheet2.xlsx", ["Documents", "Excel"], 3, 2048),
        File(233, "Folder3", ["Folder"], -1, 4096),
    ]

    assert sorted(leafFiles(testFiles)) == [
        "Audio.mp3",
        "Backup.zip",
        "Code.py",
        "Document.txt",
        "Image.jpg",
        "Presentation.pptx",
        "Spreadsheet.xlsx",
        "Spreadsheet2.xlsx",
        "Video.mp4"
    ]

    assert kLargestCategories(testFiles, 3) == [
        "Documents", "Folder", "Media"
    ]

    assert largestFileSize(testFiles) == 20992
