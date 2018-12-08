import React, { Component } from 'react';
import './AssetList.css';

class AssetList extends Component {

  constructor(props) {
    super(props);
    this.state = {assets: []};
  }

  async fetchAssets() {

    const res = await fetch('assets.json');
    const assets = await res.json();

    this.setState({
      assets,
    });

  }

  componentDidMount() {
    this.fetchAssets().catch(console.error);
  }

  openAsset(asset) {
    window.open(asset.url,'_blank');
  }

  assetLine(asset) {
    return (
      <div className="asset" onClick={() => this.openAsset(asset)}>
        <div className="asset_thumbnail">
          <img src={`media/${asset.thumbnail}`} className="asset_img" alt={asset.name} />
        </div>
        <div className="asset_text">
          <span className="asset_name" >{asset.name}</span>
          <span className="asset_type" >{asset.type}</span>
          <span className="asset_desc" >{asset.description}</span>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="AssetList">
        <div className="assets">
          {this.state.assets.map(asset => this.assetLine(asset))}
        </div>
      </div>
    );
  }
}

export default AssetList;
