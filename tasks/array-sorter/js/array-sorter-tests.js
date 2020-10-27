describe("5. array sorter", function() {
    describe("array sort", function() {
        it("bubble sort of [3,1,7,5,4] = [1, 3, 4, 5, 7]", function() {
            assert.isTrue(compare(arraySorter.bubbleSort([3,1,7,5,4]), [1, 3, 4, 5, 7]));
        });

        it("quick sort of [3,1,7,5,4] = [1, 3, 4, 5, 7]", function() {
            assert.isTrue(compare(arraySorter.quickSort([3,1,7,5,4]), [1, 3, 4, 5, 7]));
        });

        it("heap sort of [3,1,7,5,4] = [1, 3, 4, 5, 7]", function() {
            assert.isTrue(compare(arraySorter.heapSort([3,1,7,5,4]), [1, 3, 4, 5, 7]));
        });

        it("insertion sort of [3,1,7,5,4] = [1, 3, 4, 5, 7]", function() {
            assert.isTrue(compare(arraySorter.insertionSort([3,1,7,5,4]), [1, 3, 4, 5, 7]));
        });

        it("selection sort of [3,1,7,5,4] = [1, 3, 4, 5, 7]", function() {
            assert.isTrue(compare(arraySorter.selectionSort([3,1,7,5,4]), [1, 3, 4, 5, 7]));
        });

        function compare(a1, a2) {
            return a1.length == a2.length && a1.every((v,i)=>v === a2[i])
        }
    });
});