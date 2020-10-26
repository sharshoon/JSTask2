describe("1. arrayTool", function() {
    describe("getMaxSubSumO1", function() {
        it("maximum sum of continuous subarray [-1, 2, 3, -9] = 5", function() {
            assert.equal(arrayTool.getMaxSubSumO1([-1, 2, 3, -9]), 5);
        });

        it("maximum sum of continuous subarray [2, -1, 2, 3, -9] = 6", function() {
            assert.equal(arrayTool.getMaxSubSumO1([2, -1, 2, 3, -9]), 6);
        });

        it("maximum sum of continuous subarray [-1, 2, 3, -9, 11] = 11", function() {
            assert.equal(arrayTool.getMaxSubSumO1([-1, 2, 3, -9, 11]), 11);
        });

        it("maximum sum of continuous subarray [-2, -1, 1, 2] = 3", function() {
            assert.equal(arrayTool.getMaxSubSumO1([-2, -1, 1, 2]), 3);
        });

        it("maximum sum of continuous subarray [100, -9, 2, -3, 5] = 100", function() {
            assert.equal(arrayTool.getMaxSubSumO1([100, -9, 2, -3, 5]), 100);
        });

        it("maximum sum of continuous subarray [1, 2, 3] = 6", function() {
            assert.equal(arrayTool.getMaxSubSumO1([1, 2, 3]), 6);
        });

        it("maximum sum of continuous subarray [-1, -2, -3] = 0", function() {
            assert.equal(arrayTool.getMaxSubSumO1([-1, -2, -3]), 0);
        });
    });

    describe("getMaxSubSumO2", function() {
        it("maximum sum of continuous subarray [-1, 2, 3, -9] = 5", function() {
            assert.equal(arrayTool.getMaxSubSumO2([-1, 2, 3, -9]), 5);
        });

        it("maximum sum of continuous subarray [2, -1, 2, 3, -9] = 9", function() {
            assert.equal(arrayTool.getMaxSubSumO2([2, -1, 2, 3, -9]), 6);
        });

        it("maximum sum of continuous subarray [-1, 2, 3, -9, 11] = 11", function() {
            assert.equal(arrayTool.getMaxSubSumO2([-1, 2, 3, -9, 11]), 11);
        });

        it("maximum sum of continuous subarray [-2, -1, 1, 2] = 3", function() {
            assert.equal(arrayTool.getMaxSubSumO2([-2, -1, 1, 2]), 3);
        });

        it("maximum sum of continuous subarray [100, -9, 2, -3, 5] = 100", function() {
            assert.equal(arrayTool.getMaxSubSumO2([100, -9, 2, -3, 5]), 100);
        });

        it("maximum sum of continuous subarray [1, 2, 3] = 6", function() {
            assert.equal(arrayTool.getMaxSubSumO2([1, 2, 3]), 6);
        });

        it("maximum sum of continuous subarray [-1, -2, -3] = 0", function() {
            assert.equal(arrayTool.getMaxSubSumO2([-1, -2, -3]), 0);
        });
    });

    describe("findMax", function() {
        it("max value from [1, 2, 3, 4] = 4", function() {
            assert.equal(arrayTool.findMax([1, 2, 3, 4]), 4);
        });

        it("max value from [-1, 0, 56, 9] = 56", function() {
            assert.equal(arrayTool.findMax([-1, 0, 56, 9]), 56);
        });

        it("max value from [-1, -2, -3, -4] = -1", function() {
            assert.equal(arrayTool.findMax([-1, -2, -3, -4]), -1);
        });
    });

    describe("findMin", function() {
        it("min value from [1, 2, 3, 4] = 1", function() {
            assert.equal(arrayTool.findMin([1, 2, 3, 4]), 1);
        });

        it("min value from [100, 6, -11, 77] = -11", function() {
            assert.equal(arrayTool.findMin([100, 6, -11, 77]), -11);
        });

        it("min value from [-7, 0, -9, 8, 12, 5, 104] = -9", function() {
            assert.equal(arrayTool.findMin([-7, 0, -9, 8, 12, 5, 104]), -9);
        });
    });

    describe("findMedian", function() {
        it("median value from [1, 2, 3, 4] = 2.5", function() {
            assert.equal(arrayTool.findMedian([1, 2, 3, 4]), 2.5);
        });

        it("median value from [4, 5, 6, 7, 8] = 6", function() {
            assert.equal(arrayTool.findMedian([4, 5, 6, 7, 8]), 6);
        });

        it("median value from [9, 0, -4, 15, -8, 3, 19] = 15", function() {
            assert.equal(arrayTool.findMedian([9, 0, -4, 15, -8, 3, 19]), 15);
        });
    });

    describe("maxAscendingSequence", function() {
        it("max ascending sequence from [1, 3, 7, 4, 6, 7, 8, 1, 2, 5, 7, 8, 90, 1] = [1, 2, 5, 7, 8, 90]", function() {
            assert.isTrue(compare(arrayTool.maxAscendingSequence([1, 3, 7, 4, 6, 7, 8, 1, 2, 5, 7, 8, 90, 1]), [1, 2, 5, 7, 8, 90]));
        });

        it("max ascending sequence from [10, 9, 8] = []]", function() {
            assert.isTrue(compare(arrayTool.maxAscendingSequence([10, 9, 8]), []));
        });

        it("median value from [9, 8, 7, 8, 5] = [7, 8]]", function() {
            assert.isTrue(compare(arrayTool.maxAscendingSequence([9, 8, 7, 8, 5]), [7, 8]));
        });

        function compare(a1, a2) {
            return a1.length == a2.length && a1.every((v,i)=>v === a2[i])
        }
    });

});