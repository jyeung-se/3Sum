const threeSum = function(nums) {

    let sum = 0
    let results = []

    nums = nums.sort((a,b) => a - b)
    for (let a = 0; a < nums.length; a++) {
        if (a > 0 && nums[a] == nums[a - 1]) continue
        let diff = sum - nums[a]
        let b = a + 1
        let c = nums.length - 1

        while (b < c) {
            if (nums[b] + nums[c] == diff) {
                let triplet = [nums[a], nums[b], nums[c]]
                results.push(triplet)
                while (b < c && nums[b] == nums[b + 1]) b++
                while (b < c && nums[c] == nums[c - 1]) c--
                b++
                c++
            } else if (nums[b] + nums[c] < diff) {
                b++
            } else {
                c--
            }
        }
    }
    return results
}
