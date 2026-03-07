"use client";

import React, { useRef, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, Float } from '@react-three/drei';
import { MathUtils, Group } from 'three';

function Model() {
    const { scene } = useGLTF('/models/dou.glb');
    const groupRef = useRef<Group>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const container = document.getElementById('hero-section');
            if (!container) return;

            const rect = container.getBoundingClientRect();
            // Normalize between -1 and 1
            let nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            let ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;

            // Clamp values
            nx = MathUtils.clamp(nx, -1, 1);
            ny = MathUtils.clamp(ny, -1, 1);

            setMousePos({ x: nx, y: ny });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useFrame((state, delta) => {
        if (!groupRef.current) return;

        // X rotation controlled by Y mouse, Y rotation controlled by X mouse
        // Clamp horizontal to ±0.35 radians, vertical to ±0.25 radians
        const targetRotY = mousePos.x * 0.35;
        const targetRotX = mousePos.y * 0.25;

        // Smooth rotation using MathUtils.damp with factor 4
        groupRef.current.rotation.y = MathUtils.damp(groupRef.current.rotation.y, targetRotY, 4, delta);
        groupRef.current.rotation.x = MathUtils.damp(groupRef.current.rotation.x, targetRotX, 4, delta);
    });

    return (
        <Float floatIntensity={1} rotationIntensity={0} speed={2}>
            <group ref={groupRef}>
                <primitive object={scene} scale={3.9} position={[0, -2, 0]} />
            </group>
        </Float>
    );
}

// Preload the model
useGLTF.preload('/models/dou.glb');

export default function Dou3DModel() {
    return (
        <div className="absolute inset-0 w-full h-full drop-shadow-[0_0_40px_rgba(251,110,254,0.4)]">
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <Environment preset="city" />
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
            </Canvas>
        </div>
    );
}