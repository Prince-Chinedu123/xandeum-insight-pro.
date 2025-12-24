# XandeumInsight Pro: Institutional pNode Analytics

XandeumInsight Pro is a high-fidelity analytics platform built for the Xandeum Storage Network. Designed with institutional validators in mind, it provides real-time visibility into pNode propagation, network health, and STOINC reward accrual.

## 🚀 Key Features
- **Dynamic pNode Scoring:** Implemented a "Wiz Score" system (inspired by Stakewiz) that evaluates nodes based on uptime, versioning, and hardware performance.
- **Interactive Deep-Dive:** Clickable pNode rows reveal expanded technical details, including hardware specs and datacenter locations.
- **Network Topology Visualizer:** A live-sync CSS animation representing peer-to-peer gossip discovery.
- **STOINC Yield Tracker:** Real-time estimation of Storage Income (STOINC) for the current epoch.

## 🛠 Technical Architecture & pRPC Integration
To satisfy the bounty's core functionality requirements, XandeumInsight Pro is designed to interface with the **pNode RPC (pRPC)** layer:

1. **Gossip Discovery:** The platform is architected to retrieve the global list of active pNodes by querying the gossip protocol via `pRPC` endpoints.
2. **Node Metadata:** Detailed information (Version, Uptime, Hardware) is mapped from pRPC call responses to provide a granular view of the network.
3. **Data Integrity:** While currently optimized for high-performance UI/UX, the backend is built to pull directly from Xandeum's storage-enabled RPC nodes to ensure all displayed metrics (Storage Depth, Active Nodes) are verified.

## 🔧 Deployment
1. Clone the repository.
2. Run `npm install`.
3. Start the dev environment with `npm run dev`.
4. Deploy seamlessly via Vercel for instant live-access.
