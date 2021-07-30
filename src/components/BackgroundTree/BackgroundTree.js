import React from 'react';
import './BackgroundTree.css';

const BackgroundTree = () => {
    return (
        <>
            <div className='background_tree_top'>
                <img src={'./assets/images/backgroundTree/tree_top.svg'} alt={'header background tree'}/>
            </div>

            <div className='background_tree_trunk'/>

            <div className='background_tree_branch' style={{top: '520px'}}>
                <img src={'./assets/images/backgroundTree/tree_branch_01.svg'} alt={'header background branch'}/>
            </div>

            <div className='background_tree_branch' style={{top: '820px'}}>
                <img src={'./assets/images/backgroundTree/tree_branch_02.svg'} alt={'header background branch'}/>
            </div>

            <div className='background_tree_branch' style={{top: '2200px'}}>
                <img src={'./assets/images/backgroundTree/tree_branch_01.svg'} alt={'header background branch'}/>
            </div>

            <div className='background_tree_branch' style={{top: '2875px'}}>
                <img src={'./assets/images/backgroundTree/tree_branch_02.svg'} alt={'header background branch'}/>
            </div>

            <div className='background_tree_branch' style={{top: '3485px'}}>
                <img src={'./assets/images/backgroundTree/tree_branch_02.svg'} alt={'header background branch'}/>
            </div>
        </>
    );
};

export default BackgroundTree;