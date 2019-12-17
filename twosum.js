/* return 2 numbers of indices */

var twoSum = function(nums, target) {
    let len = nums.length;
    const  map = {};
    let i = 0;
    for (i = 0; i < len; i++) {
        const converse = target - nums[i];
        if (converse in map) {
            return [map[converse], i];
        }
        map[nums[i]] = i;
    }
    return null;
};

console.log(twoSum([1,2,3,4,5], 9));
