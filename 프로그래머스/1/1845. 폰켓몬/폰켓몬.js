function solution(nums) {
    //전체 폰켓몬의 수
    const totalPokemon = nums.length;
    console.log(totalPokemon);
    //선택 가능한 최대 폰캣몬의 수
    const maxSelections = totalPokemon / 2;
    console.log(maxSelections);
    //set은 배열의 중복 제거
    const uniqueTypes = new Set(nums);
    console.log(uniqueTypes);
    //고유 폰켓몬의 종류
    const uniqueCount = uniqueTypes.size;
    console.log(uniqueCount);
    //작은 값을 반환
    const result =  Math.min(uniqueCount, maxSelections);
    console.log('결과값',result);
    
    return result;
}
