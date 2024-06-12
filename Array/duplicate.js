// 

var containsDuplicate = function(nums) {
  const set = new set(nums)
  return set.size !== nums.length
}


 let nums = [1,2,3,4]
 console.log(containsDuplicate(nums))
