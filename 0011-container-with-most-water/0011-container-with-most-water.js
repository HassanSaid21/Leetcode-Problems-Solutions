/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    

    let left = 0
    let right = height.length-1
    let area = 0
    while(right > left ){
          let minHeight = height[left]>height[right]? height[right] :height[left]
          let curArea = minHeight *( right-left)
           area =  curArea>area? curArea :area
        
          if(height[right]<height[left])

          right--
          else
          left++

    }


  return area 
};