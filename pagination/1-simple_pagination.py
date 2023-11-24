#!/usr/bin/env python3
"""function named index_range that takes two integer
arguments page and page_size"""
import csv
import math
from typing import List, Tuple


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def index_range(iself, page: int, page_size: int) -> Tuple:
        """return a tuple"""
        a: int = (page * page_size) - page_size
        return (a, page_size * page)

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """that takes two integer arguments page with default
        value 1 and page_size with default value 10"""
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0
        with open(self.DATA_FILE, "r") as f:
            reader = csv.reader(f)
            datos = list(reader)
            start, end = self.index_range(page, page_size)
            page_data = datos[start+1:end+1]
            return page_data
