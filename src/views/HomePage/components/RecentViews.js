import React from 'react'
import RecentViewItem from './RecentViewItem'

function RecentViews() {
    const recentViewList = ['List View 1', 'List View 2']
    return (
        <div>
            Recent View
            {recentViewList.map(item => {
                return <RecentViewItem name={item}></RecentViewItem>
            })}
        </div>
    )
}

export default RecentViews
