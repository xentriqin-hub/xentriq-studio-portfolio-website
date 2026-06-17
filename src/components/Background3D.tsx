import React, { useEffect, useRef } from "react";

interface Point3D {
  x: number;
  y: number;
  z: number;
  px?: number; // projected screen x
  py?: number; // projected screen y
  baseX: number;
  baseY: number;
  baseZ: number;
  speedX: number;
  speedY: number;
  speedZ: number;
  color: string;
  size: number;
}

interface Polyhedron {
  centerX: number;
  centerY: number;
  centerZ: number;
  vertices: { x: number; y: number; z: number }[];
  edges: [number, number][];
  rotX: number;
  rotY: number;
  rotZ: number;
  rotSpeedX: number;
  rotSpeedY: number;
  size: number;
  color: string;
}

export default function Background3D() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, isOver: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Dynamic sizing helper
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Mouse moves
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to -0.5 to 0.5
      mouseRef.current.targetX = (e.clientX / window.innerWidth) - 0.5;
      mouseRef.current.targetY = (e.clientY / window.innerHeight) - 0.5;
      mouseRef.current.isOver = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.targetX = 0;
      mouseRef.current.targetY = 0;
      mouseRef.current.isOver = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Generate 3D Star/Node network
    const particleCount = 75;
    const particles: Point3D[] = [];
    const colors = ["rgba(34, 197, 94, 0.4)", "rgba(16, 185, 129, 0.4)", "rgba(255, 255, 255, 0.25)", "rgba(52, 211, 153, 0.35)"];

    for (let i = 0; i < particleCount; i++) {
      // Uniformly distribute in a sphere/box
      const x = (Math.random() - 0.5) * 1000;
      const y = (Math.random() - 0.5) * 1000;
      const z = (Math.random() - 0.5) * 600 + 100; // Keep it spaced in depth

      particles.push({
        x,
        y,
        z,
        baseX: x,
        baseY: y,
        baseZ: z,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        speedZ: (Math.random() - 0.5) * 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 2 + 1,
      });
    }

    // Floating 3D Polyhedrons positioned at different key visual zones
    const polyhedrons: Polyhedron[] = [
      // 1. Large wireframe Cube in upper right (Hero visuals)
      {
        centerX: 350,
        centerY: -180,
        centerZ: 300,
        size: 90,
        rotX: Math.random() * Math.PI,
        rotY: Math.random() * Math.PI,
        rotZ: Math.random() * Math.PI,
        rotSpeedX: 0.006,
        rotSpeedY: 0.008,
        color: "rgba(52, 211, 153, 0.25)",
        vertices: [
          { x: -1, y: -1, z: -1 },
          { x: 1, y: -1, z: -1 },
          { x: 1, y: 1, z: -1 },
          { x: -1, y: 1, z: -1 },
          { x: -1, y: -1, z: 1 },
          { x: 1, y: -1, z: 1 },
          { x: 1, y: 1, z: 1 },
          { x: -1, y: 1, z: 1 },
        ],
        edges: [
          [0, 1], [1, 2], [2, 3], [3, 0], // back
          [4, 5], [5, 6], [6, 7], [7, 4], // front
          [0, 4], [1, 5], [2, 6], [3, 7]  // connectors
        ],
      },
      // 2. Light crystalline Octahedron on center-left (About Section height)
      {
        centerX: -400,
        centerY: 150,
        centerZ: 400,
        size: 80,
        rotX: Math.random() * Math.PI,
        rotY: Math.random() * Math.PI,
        rotZ: Math.random() * Math.PI,
        rotSpeedX: 0.005,
        rotSpeedY: 0.003,
        color: "rgba(16, 185, 129, 0.22)",
        vertices: [
          { x: 0, y: -1.4, z: 0 },    // Top vertex
          { x: 0, y: 1.4, z: 0 },     // Bottom vertex
          { x: -1, y: 0, z: -1 },    // Ring center points
          { x: 1, y: 0, z: -1 },
          { x: 1, y: 0, z: 1 },
          { x: -1, y: 0, z: 1 },
        ],
        edges: [
          [0, 2], [0, 3], [0, 4], [0, 5], // pyramid top
          [1, 2], [1, 3], [1, 4], [1, 5], // pyramid bottom
          [2, 3], [3, 4], [4, 5], [5, 2]  // center ring
        ],
      },
      // 3. Mini Prism in bottom right
      {
        centerX: 380,
        centerY: 400,
        centerZ: 300,
        size: 55,
        rotX: Math.random() * Math.PI,
        rotY: Math.random() * Math.PI,
        rotZ: Math.random() * Math.PI,
        rotSpeedX: -0.004,
        rotSpeedY: 0.009,
        color: "rgba(255, 255, 255, 0.2)",
        vertices: [
          { x: 0, y: -1.2, z: 0 },
          { x: -1, y: 0.8, z: -0.8 },
          { x: 1, y: 0.8, z: -0.8 },
          { x: 0, y: 0.8, z: 1 },
        ],
        edges: [
          [0, 1], [0, 2], [0, 3],
          [1, 2], [2, 3], [3, 1]
        ],
      }
    ];

    // Main animation loop parameters
    let angleX = 0;
    let angleY = 0;
    const fov = 400; // perspective focal length

    const animate = () => {
      // 1. Clear canvas and apply a semi-transparent black overlay to keep contrast high
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(0, 0, 0, 0.55)";
      ctx.fillRect(0, 0, width, height);

      // Draw subtle orbital mesh grid lines or stars in background
      const cx = width / 2;
      const cy = height / 2;

      // Smoothly interpolate mouse movement offsets for premium inertia
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      // Global rotation from mouse offsets
      angleY = mouseRef.current.x * 0.4;
      angleX = -mouseRef.current.y * 0.4;

      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      // 2. Project & Update Particle Constellation
      particles.forEach((p) => {
        // Apply gentle ambient drift
        p.baseX += p.speedX;
        p.baseY += p.speedY;
        p.baseZ += p.speedZ;

        // Warp bounds check to prevent floating into infinite void
        if (Math.abs(p.baseX) > 800) p.speedX *= -1;
        if (Math.abs(p.baseY) > 800) p.speedY *= -1;
        if (p.baseZ < 10 || p.baseZ > 900) p.speedZ *= -1;

        // Apply mouse pull magnetic displacement locally
        let rx = p.baseX;
        let ry = p.baseY;
        let rz = p.baseZ;

        // 3D rotation based on mouse orientation matrix
        // Around Y axis
        let x1 = rx * cosY - rz * sinY;
        let z1 = rz * cosY + rx * sinY;
        // Around X axis
        let y2 = ry * cosX - z1 * sinX;
        let z2 = z1 * cosX + ry * sinX;

        // Perspective Projection calculation
        const scale = fov / (fov + z2);
        p.px = cx + x1 * scale;
        p.py = cy + y2 * scale;

        // Draw particle if within screenspace boundaries
        if (p.px >= 0 && p.px <= width && p.py >= 0 && p.py <= height) {
          // Adjust size by scale for 3D depth perception
          const particleSize = Math.max(0.5, p.size * scale * 1.5);
          const opacity = Math.max(0.1, scale * 0.85);

          ctx.beginPath();
          ctx.arc(p.px, p.py, particleSize, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        }
      });

      // 3. Connect particles with translucent glowing grid/mesh lines if they are close
      ctx.lineWidth = 0.6;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const pi = particles[i];
          const pj = particles[j];

          if (pi.px !== undefined && pi.py !== undefined && pj.px !== undefined && pj.py !== undefined) {
            const dx = pi.px - pj.px;
            const dy = pi.py - pj.py;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 120) {
              // Closer lines are more radiant
              const alpha = (1 - dist / 120) * 0.15;
              ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
              ctx.beginPath();
              ctx.moveTo(pi.px, pi.py);
              ctx.lineTo(pj.px, pj.py);
              ctx.stroke();
            }
          }
        }
      }

      // 4. Project & Animate 3D Floating Polyhedrons (Wireframe Solid Shapes)
      polyhedrons.forEach((poly) => {
        // Rotate polyhedron on its local axes
        poly.rotX += poly.rotSpeedX;
        poly.rotY += poly.rotSpeedY;

        const pCosX = Math.cos(poly.rotX);
        const pSinX = Math.sin(poly.rotX);
        const pCosY = Math.cos(poly.rotY);
        const pSinY = Math.sin(poly.rotY);

        const localProjected: { x: number; y: number }[] = [];

        // Project vertices
        poly.vertices.forEach((v) => {
          // Local 3D rotation
          // Rotate around Y
          let lx1 = v.x * pCosY - v.z * pSinY;
          let lz1 = v.z * pCosY + v.x * pSinY;
          // Rotate around X
          let ly2 = v.y * pCosX - lz1 * pSinX;
          let lz2 = lz1 * pCosX + v.y * pSinX;

          // Scale local Coordinates by size
          let sx = lx1 * poly.size;
          let sy = ly2 * poly.size;
          let sz = lz2 * poly.size;

          // Translate to global coordinates relative to central view anchor
          let gx = poly.centerX + sx;
          let gy = poly.centerY + sy;
          let gz = poly.centerZ + sz;

          // Align globally with global mouse orbit perspective orientation
          let wx1 = gx * cosY - gz * sinY;
          let wz1 = gz * cosY + gx * sinY;
          let wy2 = gy * cosX - wz1 * sinX;
          let wz2 = wz1 * cosX + gy * sinX;

          // 3D-to-2D Perspective
          const polyScale = fov / (fov + wz2);
          const px = cx + wx1 * polyScale;
          const py = cy + wy2 * polyScale;

          localProjected.push({ x: px, y: py });

          // Draw neon node joints
          ctx.beginPath();
          ctx.arc(px, py, 3, 0, Math.PI * 2);
          ctx.fillStyle = poly.color;
          ctx.fill();
        });

        // Connection lines (Edges)
        poly.edges.forEach(([vA, vB]) => {
          const ptA = localProjected[vA];
          const ptB = localProjected[vB];

          if (ptA && ptB) {
            ctx.beginPath();
            ctx.moveTo(ptA.x, ptA.y);
            ctx.lineTo(ptB.x, ptB.y);
            ctx.strokeStyle = poly.color;
            ctx.lineWidth = 1.2;
            ctx.stroke();

            // Glow edge overlay highlight
            ctx.beginPath();
            ctx.moveTo(ptA.x, ptA.y);
            ctx.lineTo(ptB.x, ptB.y);
            ctx.strokeStyle = "rgba(16, 185, 129, 0.08)";
            ctx.lineWidth = 4;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover pointer-events-none -z-20 brightness-[0.45]"
        src="https://res.cloudinary.com/dd1qv8dq6/video/upload/v1781683732/216851_medium_gitdey.mp4"
        referrerPolicy="no-referrer"
      />
      {/* Light, ambient, professional green gradient overlays */}
      <div 
        className="fixed inset-0 pointer-events-none -z-15 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.11)_0%,_transparent_65%)]"
      />
      <div 
        className="fixed inset-0 pointer-events-none -z-15 bg-[radial-gradient(circle_at_bottom_left,_rgba(52,211,153,0.07)_0%,_transparent_50%)]"
      />
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none -z-10"
      />
    </>
  );
}
