import React from 'react';
import { useHistoryContext } from '../../hooks/contexts/HistoryProvider';
import CardStats from '../Cards/CardStats';


const HeaderStats: React.FC = () => {
  const {historyList} = useHistoryContext()



  function getHistoriesFromMonth(month: number) {
    if(month < 0) return []
    const historiesFromThisMonth = historyList.filter(history => new Date(history.date).getMonth() === month)
    return historiesFromThisMonth
  }

  function getMostUsedMaterial(change: number = 0) {
    const month = (new Date().getMonth()) + change
    const historiesFromThisMonth = getHistoriesFromMonth(month)
    if(historiesFromThisMonth.length === 0) return "--"
    const materials = historiesFromThisMonth.map(history => history.material)
    const hashmap = materials.reduce((acc: any, val) => {
      acc[val] = (acc[val] || 0 ) + 1
      return acc
    },{})

    return Object.keys(hashmap).reduce((a, b) => hashmap[a] > hashmap[b] ? a : b)
  }

  function getAverage(element: 'ce' | 'c' | 'si', change: number = 0) {
    const month = (new Date().getMonth()) + change
    const historiesFromThisMonth = getHistoriesFromMonth(month)
    var results: (string | undefined)[] = []
    if(element === 'ce')
      results = historiesFromThisMonth.map(history => history.results.ce)

    else if(element === 'c')
      results = historiesFromThisMonth.map(history => history.results.c)

    else if(element === 'si')
      results = historiesFromThisMonth.map(history => history.results.si)

    results = results.filter(result => !!result)
    const values = (results as string[]).map(result => parseFloat(result)).filter(value => value != 0 && value > 0 && value < 1000)

    if(values.length === 0) return 0

    const average = values.reduce( ( p, c ) => p + c, 0 ) / values.length

    return average
  }


  function calculateAverageDifference(element: 'ce' | 'c' | 'si'){
    const thisMonthAverage = getAverage(element)
    const lastMonthAverage = getAverage(element, -1)

    return thisMonthAverage - lastMonthAverage

  }

  function formatValue(value: number){
    if(value === 0) return "-- %"
    return value.toFixed(2) + " %"
  }

  return (
    <>
      {/* Header */}
      <div className="relative bg-gray-800 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="USED MATERIAL"
                  statTitle={getMostUsedMaterial()}
                  statArrow="up"
                  statPercent={0}
                  statPercentColor="text-emerald-500"
                  statDescripiron="In This Month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="CE"
                  statTitle={formatValue(getAverage('ce'))}
                  statArrow="down"
                  statPercent={calculateAverageDifference('ce')}
                  statPercentColor={calculateAverageDifference('ce') > 0 ? "text-green-500" : "text-red-500"}
                  statDescripiron="From Last Month"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="C"
                  statTitle={formatValue(getAverage('c'))}
                  statArrow="down"
                  statPercent={calculateAverageDifference('c')}
                  statPercentColor="text-orange-500"
                  statDescripiron="From Last Month"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="SI"
                  statTitle={formatValue(getAverage("si"))}
                  statArrow="up"
                  statPercent={calculateAverageDifference('si')}
                  statPercentColor="text-emerald-500"
                  statDescripiron="From Last Month"
                  statIconName="fas fa-percent"
                  statIconColor="bg-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderStats;
