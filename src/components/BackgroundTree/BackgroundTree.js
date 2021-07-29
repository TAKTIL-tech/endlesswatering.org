import React from 'react';
import './BackgroundTree.css';

const BackgroundTree = () => {
    return (
        <>
            <div className='background_tree_top'>
                <img src={'./assets/images/backgroundTree/tree_top.svg'} alt={'header background tree'}/>
            </div>

            <div className='background_tree_trunk'/>

            <div className='background_tree_branch' style={{top: '491px'}}>
                <img src={'./assets/images/backgroundTree/tree_branch_01.svg'} alt={'header background branch'}/>
            </div>

            <div className='background_tree_branch' style={{top: '815px'}}>
                <img src={'./assets/images/backgroundTree/tree_branch_01.svg'} alt={'header background branch'}/>
            </div>

            <div className='background_tree_branch' style={{top: '2279px'}}>
                <img src={'./assets/images/backgroundTree/tree_branch_01.svg'} alt={'header background branch'}/>
            </div>

            <div className='background_tree_branch' style={{top: '3404px'}}>
                <img src={'./assets/images/backgroundTree/tree_branch_01.svg'} alt={'header background branch'}/>
            </div>

            <div className='background_tree_branch' style={{top: '4461px'}}>
                <img src={'./assets/images/backgroundTree/tree_branch_01.svg'} alt={'header background branch'}/>
            </div>
        </>
    );
};

export default BackgroundTree;