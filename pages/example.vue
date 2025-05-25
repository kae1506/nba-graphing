<template>
    <div>
        <h1>NBA Player Comparison</h1>
        <div class="container">
          <div class="img-container">
            <p>Stat vs Stat Graphs Example: Points per game vs Assists per game for the year 2025</p>
            <img src="@/assets/statVsStat.png" alt="Stat vs Stat Graph" />
          </div>
          <div class="img-container">
            <p>Line Graph Example: Points per game over the nth seasons of their career</p>
            <img src="@/assets/lineGraph.png" alt="line Graph example" />
          </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.img-container {
    margin: 20px;
    text-align: center;
    width: 90%;
}
.img-container img {
    max-width: 100%;
    padding: 10px;
    margin: 10px;
    height: auto;
    border: 1px solid #ccc;
    border-radius: 8px;
}
.img-container p {
    margin-top: 10px;
    font-size: 30px;
    color: white;
}
</style>